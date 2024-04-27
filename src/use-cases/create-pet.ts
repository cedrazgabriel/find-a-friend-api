import { type Pet } from '@prisma/client'
import { type IPetsRepository } from '../repositories/interfaces/IPetsRepository'

interface CreatePetRequest {
  name: string
  age: number
  about: string | null
  size: string
  energyLevel: string
  ownerId: string
}

interface CreatePetResponse {
  pet: Pet
}
export class CreatePetUseCase {
  constructor(private readonly petRepository: IPetsRepository) {}

  async execute({
    name,
    age,
    about,
    size,
    energyLevel,
    ownerId,
  }: CreatePetRequest): Promise<CreatePetResponse> {
    // o insert acontece aqui 
    const pet = await this.petRepository.create({
      name,
      age,
      about,
      size,
      energyLevel,
      owner_id: ownerId,
    })

    return { pet }
  }
}
