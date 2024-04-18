import fastify from 'fastify'
import { petRoutes } from './http/controllers/pets/routes'
import { organizationRoutes } from './http/controllers/org/routes'

export const app = fastify()

app.register(petRoutes)
app.register(organizationRoutes)
