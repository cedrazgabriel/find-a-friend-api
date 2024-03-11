import { Pet, Prisma } from '@prisma/client'
import { IPetsRepository } from '../interfaces/IPetsRepository'
import { randomUUID } from 'crypto'

export class InMemoryPetsRepository implements IPetsRepository {
  public items: Pet[] = []

  async create(data: Prisma.PetUncheckedCreateInput) {
    const pet = {
      id: randomUUID(),
      name: data.name,
      age: data.age,
      about: data.about ?? null,
      size: data.size,
      energyLevel: data.energyLevel,
      owner_id: data.owner_id,
      created_at: new Date(),
      updated_at: new Date(),
    }

    this.items.push(pet)

    return pet
  }
}
