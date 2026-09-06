import { type NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Rate limiting in-memory store — max 20 requests per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW = 10 * 60 * 1000; // 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count += 1;
  return false;
}

const SYSTEM_INSTRUCTION = `You are Chillfix AI, the official virtual assistant for Chillfix Air Solution — an AC service, repair, and installation business serving Chennai.

YOUR GOAL:
Provide helpful, friendly, practical, and concise answers to website visitors regarding AC servicing, repair, installation, cleaning, and maintenance in Chennai.

BUSINESS DETAILS:
- Business Name: Chillfix Air Solution
- Phone / WhatsApp: 9080495932
- Email: chennaichillfixacservice@gmail.com
- Website: https://chillfixairsolution.in/
- Service Coverage: Chennai and suburban areas including Perungalathur, Tambaram, Chromepet, Pallavaram, Vandalur, Manivakkam, Selaiyur, Medavakkam, OMR, and nearby localities.
- Core Services: Split AC & Window AC servicing, jet pump deep cleaning, chemical wash, AC repair & diagnostics, refrigerant gas leak detection & gas filling, new & old AC installation/uninstallation, AMC maintenance plans.

COMMUNICATION & LANGUAGE:
- Professional, friendly, helpful, concise, and Chennai-focused.
- Support English, Tamil, and Tanglish (Tamil written in English script).
- If the visitor speaks English, respond in clear English.
- If the visitor speaks Tamil or Tanglish, respond naturally in Tamil or Tanglish. Example:
  User: "AC cooling illa, enna problem?"
  Assistant: "Cooling illa na few reasons irukkalam — air filter blockage, outdoor unit dust, refrigerant gas leak, illa capacitor/compressor problem. Basic filter cleaning check pannalaam. Problem continue aana technician onsite inspection thevai. Chillfix Air Solution-ku 9080495932-la call pannunga!"
- Keep responses concise (usually 2-4 sentences or short bullet points).

SAFETY & INTEGRITY RULES:
- Never claim to have physically inspected the user's AC.
- Never invent prices, offers, warranties, certifications, physical shop addresses, or technician names. For exact pricing, refer them to call 9080495932 or check the pricing section.
- For potentially dangerous situations (burning smell, smoke, sparks, tripping circuit breaker): Instruct the customer to IMMEDIATELY switch off the AC and main MCB power for safety, and contact Chillfix at 9080495932.
- For issues like "not cooling", "water leakage", "noise", "gas leak": Explain the most likely 2-3 causes in simple terms, give safe basic tips (like cleaning the removable air filter), and recommend an onsite inspection by Chillfix.
- Always provide Chillfix contact (9080495932) when the customer wants to book or speaks of urgent repair.`;

interface ChatHistoryItem {
  role: 'user' | 'model';
  content: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many messages sent. Please wait a few minutes or call 9080495932 directly.',
          error: 'RATE_LIMITED',
        },
        { status: 429 },
      );
    }

    const body = await request.json().catch(() => ({}));
    const message = typeof body.message === 'string' ? body.message.trim() : '';
    const rawHistory: unknown = body.history;

    if (!message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Message cannot be empty.',
          error: 'EMPTY_MESSAGE',
        },
        { status: 400 },
      );
    }

    // Security: limit maximum message length to prevent prompt injection / payload abuse
    if (message.length > 1000) {
      return NextResponse.json(
        {
          success: false,
          message: 'Message is too long. Please keep questions under 1000 characters.',
          error: 'MESSAGE_TOO_LONG',
        },
        { status: 400 },
      );
    }

    // Format & sanitize previous history (limit to last 10 messages max)
    const validHistory: ChatHistoryItem[] = [];
    if (Array.isArray(rawHistory)) {
      for (const item of rawHistory.slice(-10)) {
        if (
          item &&
          typeof item === 'object' &&
          (item.role === 'user' || item.role === 'model') &&
          typeof item.content === 'string'
        ) {
          validHistory.push({
            role: item.role,
            content: item.content.slice(0, 1000),
          });
        }
      }
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Graceful fallback if GEMINI_API_KEY is not configured yet
    if (!apiKey) {
      return NextResponse.json({
        success: true,
        reply:
          "Hi! Chillfix AI is currently getting ready. For immediate AC service, repair, or quotes in Chennai, please contact our team directly at 9080495932 or email chennaichillfixacservice@gmail.com.",
      });
    }

    // Prepare Gemini payload
    const contents = [
      ...validHistory.map((m) => ({
        role: m.role,
        parts: [{ text: m.content }],
      })),
      {
        role: 'user',
        parts: [{ text: message }],
      },
    ];

    const geminiPayload = {
      system_instruction: {
        parts: [{ text: SYSTEM_INSTRUCTION }],
      },
      contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 800,
        topP: 0.95,
      },
    };

    // Primary: gemini-2.5-flash (free tier in Google AI Studio)
    // Fallback: gemini-1.5-flash
    let response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(geminiPayload),
        signal: AbortSignal.timeout(15000),
      },
    ).catch(() => null);

    // If gemini-2.5-flash is not available, try gemini-1.5-flash
    if (!response || !response.ok) {
      response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(geminiPayload),
          signal: AbortSignal.timeout(15000),
        },
      ).catch(() => null);
    }

    if (!response || !response.ok) {
      console.error('[Gemini API] Request failed with status:', response?.status);
      return NextResponse.json({
        success: true,
        reply:
          "Sorry, I'm having trouble connecting right now. Please contact Chillfix Air Solution directly at 9080495932 for quick AC service assistance.",
      });
    }

    const data = await response.json();
    const candidateText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? '';

    if (!candidateText) {
      return NextResponse.json({
        success: true,
        reply:
          "I couldn't generate a response. Please call us at 9080495932 and our technician will be happy to help.",
      });
    }

    return NextResponse.json({
      success: true,
      reply: candidateText,
    });
  } catch (error) {
    console.error('[Chat API] Unexpected error:', error);
    return NextResponse.json({
      success: true,
      reply:
        "Sorry, I'm having trouble responding right now. Please contact Chillfix Air Solution directly at 9080495932.",
    });
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
