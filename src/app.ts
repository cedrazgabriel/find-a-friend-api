import fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'
import cors from '@fastify/cors'
import { petRoutes } from './http/controllers/pets/routes'
import { swaggerOptions } from './helpers/swagger/swagger-options'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { swaggerUiOptions } from './helpers/swagger/swagger-ui-options'

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
