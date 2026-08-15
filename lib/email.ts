import { Resend } from 'resend';
import type { ContactFormSchema } from '@/lib/validations';
import { SITE_CONFIG } from '@/constants/site';

// ============================================================
// Resend client — initialized lazily to avoid build-time errors
// ============================================================

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set');
  }
  return new Resend(apiKey);
}

// Business recipient email — defaults to your real Gmail address
const TO_EMAIL = process.env.RESEND_TO_EMAIL ?? 'chennaichillfixacservice@gmail.com';

// Sender email — uses Resend onboarding domain by default until custom domain is verified
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';

// ============================================================
// Email Templates
// ============================================================

function buildContactEmailHtml(data: ContactFormSchema): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Contact Form Submission — ChillFix Air Solution</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f4f7f9; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        .header { background: linear-gradient(135deg, #0F4C81 0%, #38BDF8 100%); padding: 32px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 22px; font-weight: 700; }
        .header p { color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px; }
        .body { padding: 32px; }
        .field { margin-bottom: 20px; }
        .field-label { font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px; }
        .field-value { font-size: 16px; color: #111827; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px 16px; }
        .message-box { background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 16px; color: #0c4a6e; white-space: pre-wrap; }
        .footer { background: #f9fafb; border-top: 1px solid #e5e7eb; padding: 20px 32px; text-align: center; }
        .footer p { margin: 0; font-size: 13px; color: #6b7280; }
        .badge { display: inline-block; background: #dcfce7; color: #166534; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 20px; margin-top: 8px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🆕 New Service Inquiry</h1>
          <p>ChillFix Air Solution — Chennai</p>
        </div>
        <div class="body">
          <div class="field">
            <div class="field-label">Customer Name</div>
            <div class="field-value">${data.name}</div>
          </div>
          <div class="field">
            <div class="field-label">Phone Number</div>
            <div class="field-value"><a href="tel:+91${data.phone}" style="color:#0F4C81;text-decoration:none;font-weight:bold;">+91 ${data.phone}</a></div>
          </div>
          ${data.email ? `
          <div class="field">
            <div class="field-label">Email Address</div>
            <div class="field-value"><a href="mailto:${data.email}" style="color:#0F4C81;text-decoration:none;">${data.email}</a></div>
          </div>` : ''}
          <div class="field">
            <div class="field-label">Service Required</div>
            <div class="field-value">${data.service}</div>
          </div>
          <div class="field">
            <div class="field-label">Message</div>
            <div class="message-box">${data.message}</div>
          </div>
        </div>
        <div class="footer">
          <p>Received via Website Contact Form — <strong>${SITE_CONFIG.url}</strong></p>
          <div class="badge">⚡ Respond within 30 minutes</div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function buildAutoReplyHtml(name: string, service: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>We received your request — ChillFix Air Solution</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f4f7f9; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        .header { background: linear-gradient(135deg, #0F4C81 0%, #38BDF8 100%); padding: 40px 32px; text-align: center; }
        .header h1 { color: white; margin: 0 0 8px; font-size: 26px; font-weight: 700; }
        .header p { color: rgba(255,255,255,0.9); margin: 0; font-size: 16px; }
        .body { padding: 40px 32px; }
        .greeting { font-size: 18px; color: #111827; margin-bottom: 16px; }
        .info-box { background: #f0f9ff; border-left: 4px solid #38BDF8; padding: 20px; border-radius: 0 8px 8px 0; margin: 24px 0; }
        .info-box p { margin: 0; color: #0c4a6e; font-size: 15px; line-height: 1.6; }
        .footer { background: #f9fafb; border-top: 1px solid #e5e7eb; padding: 24px 32px; text-align: center; }
        .footer p { margin: 0 0 8px; font-size: 13px; color: #6b7280; }
        .footer strong { color: #374151; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ We've Got Your Request!</h1>
          <p>ChillFix Air Solution, Chennai</p>
        </div>
        <div class="body">
          <p class="greeting">Hi <strong>${name}</strong>,</p>
          <p style="color:#374151;line-height:1.7;">Thank you for contacting <strong>ChillFix Air Solution</strong>. We have received your request for <strong>${service}</strong> and our team will get back to you within <strong>30 minutes</strong>.</p>
          <div class="info-box">
            <p>📞 For immediate assistance, call or WhatsApp us directly:<br />
            <strong>${SITE_CONFIG.phone}</strong> — Available 24/7 for emergencies</p>
          </div>
          <p style="color:#374151;line-height:1.7;">Our certified technicians serve all areas of Chennai including Anna Nagar, Adyar, Velachery, T. Nagar, Tambaram, OMR, and more.</p>
          <p style="color:#374151;line-height:1.7;margin-top:24px;">Thank you for choosing ChillFix Air Solution!</p>
          <p style="color:#374151;margin-top:8px;"><strong>The ChillFix Team 🧊</strong></p>
        </div>
        <div class="footer">
          <p><strong>ChillFix Air Solution</strong></p>
          <p>Chennai, Tamil Nadu, India</p>
          <p style="margin-top:4px;"><a href="${SITE_CONFIG.url}" style="color:#0F4C81;">${SITE_CONFIG.url}</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// ============================================================
// Email Service Functions
// ============================================================

export async function sendContactEmail(data: ContactFormSchema): Promise<{ success: boolean; error?: string }> {
  try {
    const resend = getResendClient();

    // Send notification to business owner Gmail
    await resend.emails.send({
      from: `ChillFix Website <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: data.email || undefined,
      subject: `🔧 New Service Request: ${data.service} — ${data.name}`,
      html: buildContactEmailHtml(data),
    });

    // Send auto-reply to customer if email provided
    if (data.email) {
      await resend.emails.send({
        from: `ChillFix Air Solution <${FROM_EMAIL}>`,
        to: [data.email],
        subject: `✅ We received your request — ChillFix Air Solution`,
        html: buildAutoReplyHtml(data.name, data.service),
      });
    }

    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to send email';
    console.error('[Email Service] Error:', error);
    return { success: false, error: message };
  }
}
