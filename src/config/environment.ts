import z from 'zod';
const envSchema = z.object({
  VITE_GRAPHQL_ENDPOINT: z.string().url(),
  VITE_API_KEY: z.string(),
});

export const environmentVariables = envSchema.parse(import.meta.env);
