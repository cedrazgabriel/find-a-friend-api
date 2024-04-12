import fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'
import { petRoutes } from './http/controllers/pets/routes'
import { swaggerOptions } from './helpers/swagger/swagger-options'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { swaggerUiOptions } from './helpers/swagger/swagger-ui-options'

export const app = fastify()

app.register(fastifySwagger, swaggerOptions)
app.register(fastifySwaggerUi, swaggerUiOptions)

app.register(petRoutes)
