import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { CreatePetUseCase } from '../../../use-cases/create-pet'
import { PrismaPetRepository } from '../../../repositories/implementations/prisma-pets-repository'

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

  const createPetUseCase = new CreatePetUseCase(new PrismaPetRepository())

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
