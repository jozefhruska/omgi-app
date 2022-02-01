export const DEPLOYMENT_URL = process.env.VERCEL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
