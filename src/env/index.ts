import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  NODE_ENV: z.string().min(1).default('DEV'),
})

const envParsed = envSchema.safeParse(process.env)

if (!envParsed.success) {
  console.error('Invalid enviroment variables:', envParsed.error.format())

  throw new Error('Invalid enviroment variables')
}

export const env = envParsed.data
