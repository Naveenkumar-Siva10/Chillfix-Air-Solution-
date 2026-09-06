import { type NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Rate limiting in-memory store — max 30 requests per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 30;
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

// Gemini candidate models in order of priority
const CANDIDATE_MODELS = [
  'gemini-2.0-flash',
  'gemini-1.5-flash',
  'gemini-1.5-flash-latest',
  'gemini-1.5-pro',
];

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const isDebug =
      request.headers.get('x-debug') === '1' ||
      request.nextUrl.searchParams.get('debug') === '1';

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

    // Clean and validate API key from environment
    const rawKey = process.env.GEMINI_API_KEY || '';
    const apiKey = rawKey.trim().replace(/^["']|["']$/g, '');

    // Graceful fallback if GEMINI_API_KEY is not configured yet
    if (!apiKey) {
      return NextResponse.json({
        success: true,
        reply:
          "Hi! Chillfix AI is currently getting ready. For immediate AC service, repair, or quotes in Chennai, please contact our team directly at 9080495932 or email chennaichillfixacservice@gmail.com.",
      });
    }

    // Format & sanitize previous history (limit to last 10 messages max)
    const validHistory: ChatHistoryItem[] = [];
    if (Array.isArray(rawHistory)) {
      for (const item of rawHistory.slice(-10)) {
        if (
          item &&
          typeof item === 'object' &&
          (item.role === 'user' || item.role === 'model') &&
          typeof item.content === 'string' &&
          item.content.trim()
        ) {
          validHistory.push({
            role: item.role,
            content: item.content.trim().slice(0, 1000),
          });
        }
      }
    }

    // Build strictly valid alternating contents array for Gemini
    // Rule 1: First item must be 'user'
    // Rule 2: 'user' and 'model' must strictly alternate
    const sanitizedContents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    for (const item of validHistory) {
      if (sanitizedContents.length === 0) {
        // Skip leading model messages
        if (item.role !== 'user') continue;
        sanitizedContents.push({ role: 'user', parts: [{ text: item.content }] });
      } else {
        const lastRole = sanitizedContents[sanitizedContents.length - 1].role;
        if (item.role !== lastRole) {
          sanitizedContents.push({ role: item.role, parts: [{ text: item.content }] });
        } else {
          // If same role consecutively, merge into last item's text
          sanitizedContents[sanitizedContents.length - 1].parts[0].text += '\n' + item.content;
        }
      }
    }

    // Add current user message
    if (sanitizedContents.length > 0 && sanitizedContents[sanitizedContents.length - 1].role === 'user') {
      // If last was user, append this message text
      sanitizedContents[sanitizedContents.length - 1].parts[0].text += '\n' + message;
    } else {
      sanitizedContents.push({ role: 'user', parts: [{ text: message }] });
    }

    // Prepare primary payload with systemInstruction
    const geminiPayload = {
      systemInstruction: {
        parts: [{ text: SYSTEM_INSTRUCTION }],
      },
      contents: sanitizedContents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 800,
        topP: 0.95,
      },
    };

    let replyText = '';
    const attemptErrors: Array<{ model: string; status: number; text: string }> = [];

    // Try candidate models in order
    for (const model of CANDIDATE_MODELS) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey,
          },
          body: JSON.stringify(geminiPayload),
          signal: AbortSignal.timeout(12000),
        });

        if (res.ok) {
          const data = await res.json();
          const parts = data?.candidates?.[0]?.content?.parts;
          if (Array.isArray(parts)) {
            replyText = parts.map((p: { text?: string }) => p?.text ?? '').filter(Boolean).join('\n').trim();
          }
          if (replyText) {
            // Success!
            break;
          }
        } else {
          const errText = await res.text().catch(() => '');
          attemptErrors.push({ model, status: res.status, text: errText });
          console.error(`[Gemini API] ${model} returned ${res.status}:`, errText);
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        attemptErrors.push({ model, status: 0, text: message });
        console.error(`[Gemini API] ${model} fetch error:`, message);
      }
    }

    // If candidate models with systemInstruction failed, try fallback payload without systemInstruction
    if (!replyText) {
      const fallbackContents = [
        {
          role: 'user',
          parts: [{ text: SYSTEM_INSTRUCTION + '\n\nUser question: ' + message }],
        },
      ];

      for (const model of ['gemini-2.0-flash', 'gemini-1.5-flash']) {
        try {
          const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
          const res = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-goog-api-key': apiKey,
            },
            body: JSON.stringify({
              contents: fallbackContents,
              generationConfig: { temperature: 0.7, maxOutputTokens: 800 },
            }),
            signal: AbortSignal.timeout(12000),
          });

          if (res.ok) {
            const data = await res.json();
            const parts = data?.candidates?.[0]?.content?.parts;
            if (Array.isArray(parts)) {
              replyText = parts.map((p: { text?: string }) => p?.text ?? '').filter(Boolean).join('\n').trim();
            }
            if (replyText) break;
          } else {
            const errText = await res.text().catch(() => '');
            attemptErrors.push({ model: model + '-fallback', status: res.status, text: errText });
          }
        } catch {
          // ignore
        }
      }
    }

    if (!replyText) {
      return NextResponse.json({
        success: isDebug ? false : true,
        reply:
          "Sorry, I'm having trouble connecting right now. Please contact Chillfix Air Solution directly at 9080495932 for quick AC service assistance.",
        ...(isDebug ? { debug: { keyLength: apiKey.length, attemptErrors } } : {}),
      });
    }

    return NextResponse.json({
      success: true,
      reply: replyText,
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
