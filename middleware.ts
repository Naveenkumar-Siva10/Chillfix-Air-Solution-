import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Global Edge Middleware for ChillFix Air Solution.
 * Permanently redirects (HTTP 308) requests from the old Vercel domain
 * (chillfix-air-solution.vercel.app) to the official production domain
 * (https://chillfixairsolution.in), preserving full URL path and query parameters.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Detect requests targeted at the old Vercel domain or subdomains
  if (
    host.includes('chillfix-air-solution.vercel.app') ||
    host === 'chillfix-air-solution.vercel.app'
  ) {
    const targetUrl = new URL(
      request.nextUrl.pathname + request.nextUrl.search,
      'https://chillfixairsolution.in'
    );
    return NextResponse.redirect(targetUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static assets and favicon
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
