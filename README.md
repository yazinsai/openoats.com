This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Website analytics

The production website uses Google Analytics 4 via `src/components/GoogleAnalytics.tsx`.
The OpenOats property belongs to the Analytics account managed by `yazin87@gmail.com`:

- Website: `https://openoats.com`
- Property ID: `561384005`
- Web stream ID: `16228246801`
- Measurement ID: `G-X0HJVY8K6T` (a public tag identifier, not a secret)
- Reporting time zone: Bahrain (UTC+03:00)

The tag loads only on `openoats.com` and `www.openoats.com`; localhost and preview
hosts do not send traffic. Google signals and ad personalization are disabled.
The Google tag sends page views and the web stream measures standard website
interactions. This integration is only for the marketing website, not the macOS app.
