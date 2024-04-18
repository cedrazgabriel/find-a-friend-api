import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateOrganizationUseCase } from '../../../use-cases/factories/make-create-org-use-case'

export async function create(
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<FastifyReply> {
  const createOrganizationSchema = z.object({
    name: z.string(),
    cep: z.string(),
    city: z.string(),
    email: z.string().email(),
    latitude: z.number(),
    longitude: z.number(),
    neighborhood: z.string(),
    password: z.string(),
    state: z.string(),
    street: z.string(),
    whatsapp: z.string(),
  })

  const {
    name,
    cep,
    city,
    email,
    latitude,
    longitude,
    neighborhood,
    password,
    state,
    street,
    whatsapp,
  } = createOrganizationSchema.parse(request.body)

  const createOrganizationUseCase = makeCreateOrganizationUseCase()

  const { org } = await createOrganizationUseCase.execute({
    name,
    cep,
    city,
    email,
    latitude,
    longitude,
    neighborhood,
    password,
    state,
    street,
    whatsapp,
  })

  return reply.code(201).send(org)
}
