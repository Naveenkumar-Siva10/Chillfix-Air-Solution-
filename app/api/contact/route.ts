import { type NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';
import { sendContactEmail } from '@/lib/email';
import type { ApiResponse } from '@/types';

export const runtime = 'nodejs';

// Rate limiting — simple in-memory store (use Redis in high-traffic production)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // max submissions
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

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

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please try again later.',
          error: 'RATE_LIMITED',
        },
        { status: 429 },
      );
    }

    // Parse & validate request body
    const body = await request.json();
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form data. Please check all fields.',
          error: validation.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    // Send email via Resend
    const result = await sendContactEmail(validation.data);

    if (!result.success) {
      console.error('[Contact API] Email send failed:', result.error);
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send your message. Please try calling us directly.',
          error: 'EMAIL_SEND_FAILED',
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          'Thank you! We have received your request and will contact you within 30 minutes.',
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('[Contact API] Unexpected error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again or call us directly.',
        error: 'INTERNAL_ERROR',
      },
      { status: 500 },
    );
  }
}

// Only allow POST
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
