import z from "zod";

const envSchema = z.object({
  CLOUDFLARE_ACCESS_KEY_ID: z.string(),
  CLOUDFLARE_SECRET_ACCESS_KEY: z.string(),
  CLOUDFLARE_BUCKET: z.string(),
  CLOUDFLARE_ACCOUNT_ID: z.string(),
  CLOUDFLARE_PUBLIC_URL: z.string().url(),
  SECRET_API_VERSION: z.string(),
  SECRET_API_ENDPOINT: z.string(),
  SECRET_API_TOKEN: z.string(),
});

export const env = envSchema.parse(process.env);
