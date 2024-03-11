import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreatePetUseCase } from '../../../use-cases/factories/make-create-pet-use-case'

export async function create(
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<FastifyReply> {
  const createPetBodySchema = z.object({
    name: z.string(),
    age: z.number(),
    about: z.string().nullable(),
    size: z.string(),
    energyLevel: z.string(),
    ownerId: z.string(),
  })

  const { name, age, about, size, energyLevel, ownerId } =
    createPetBodySchema.parse(request.body)

  const createPetUseCase = makeCreatePetUseCase()

  const { pet } = await createPetUseCase.execute({
    name,
    age,
    about,
    size,
    energyLevel,
    ownerId,
  })

  return reply.code(201).send(pet)
}
