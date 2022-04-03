export const DEPLOYMENT_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.NEXT_PUBLIC_DEPLOYMENT_URL ??
      `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
