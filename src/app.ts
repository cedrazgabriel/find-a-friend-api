import fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'
import cors from '@fastify/cors'
import { petRoutes } from './http/controllers/pets/routes'
import { organizationRoutes } from './http/controllers/org/routes'
import { swaggerOptions } from './helpers/swagger/swagger-options'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { swaggerUiOptions } from './helpers/swagger/swagger-ui-options'
import { ZodError } from 'zod'
import { env } from './env'

export const app = fastify()

// Configurações do Swagger
app.register(fastifySwagger, swaggerOptions)
app.register(fastifySwaggerUi, swaggerUiOptions)

// Configurações de CORS
app.register(cors, {
  origin: '*',
})

// Configurações de rotas
app.register(petRoutes)
app.register(organizationRoutes)


app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    reply
      .status(400)
      .send({ message: 'Validation error!', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Deveria logar em uma ferramenta externa (datadog, new relic, sentry)
  }

  return reply.status(500).send({ message: 'Internal server error' })
})