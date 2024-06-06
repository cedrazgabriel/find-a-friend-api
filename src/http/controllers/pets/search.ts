import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeSearchPetsUseCase } from '../../../use-cases/factories/make-search-pet-use-case'

const querySchema = z.object({
  city: z.string().min(1),
  age: z.string().optional(),
  size: z.string().optional(),
  energyLevel: z.string().optional(),
})

export async function searchPetsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const { city, age, size, energyLevel } = querySchema.parse(request.query)

  const searchPetsUseCase = makeSearchPetsUseCase()
  
    const { pets } = await searchPetsUseCase.execute({
      city,
      age,
      size,
      energyLevel,
    })

    return reply.status(200).send({ pets })
}
