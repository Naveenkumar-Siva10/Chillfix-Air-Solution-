# ChillFix Air Solution

Production-ready Next.js 15 website for ChillFix Air Solution — AC installation, repair & maintenance services in Chennai, Tamil Nadu, India.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Blog**: MDX (next/mdx)
- **SEO**: Next.js Metadata API + JSON-LD

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and fill in all required values.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
chillfix-air-solution/
├── app/                    # Next.js App Router
│   ├── (marketing)/        # Public marketing pages
│   ├── (legal)/            # Legal pages
│   └── api/                # API routes
├── components/             # React components
│   ├── ui/                 # shadcn/ui base components
│   ├── layout/             # Navbar, Footer, etc.
│   ├── sections/           # Page section components
│   ├── seo/                # JSON-LD schema components
│   └── common/             # Shared utility components
├── constants/              # App-wide data & constants
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities & helpers
├── public/                 # Static assets
├── styles/                 # Global CSS
└── types/                  # TypeScript types
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Run TypeScript type checker |

## Deployment

This project is Vercel-ready. Connect your GitHub repository to Vercel and configure the environment variables in the Vercel dashboard.

### Required Environment Variables on Vercel

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Resend email service API key |
| `NEXT_PUBLIC_SITE_URL` | Production URL (`https://chillfixairsolution.in`) |
| `NEXT_PUBLIC_PHONE` | Business phone number |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp number |
| `NEXT_PUBLIC_EMAIL` | Business email |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps API key (optional) |

## SEO

- Dynamic metadata via Next.js Metadata API
- JSON-LD structured data (LocalBusiness, Service, FAQ, Breadcrumb)
- Auto-generated sitemap at `/sitemap.xml`
- Robots configuration at `/robots.txt`
- Open Graph & Twitter Card support
- Canonical URLs on all pages

## License

All rights reserved — ChillFix Air Solution © 2025
