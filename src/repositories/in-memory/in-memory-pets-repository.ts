import { Pet, Prisma } from '@prisma/client'
import { FindAllParams, IPetsRepository } from '../interfaces/IPetsRepository'
import { randomUUID } from 'crypto'
import { InMemoryOrganizationRepository } from './in-memory-organization-repository'

export class InMemoryPetsRepository implements IPetsRepository {
  constructor(private orgsRepository: InMemoryOrganizationRepository) {}

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

  async findAll(params: FindAllParams): Promise<Pet[]> {
    const orgsByCity = this.orgsRepository.items.filter(
      (org) => org.city === params.city,
    )

    const pets = this.items
      .filter((item) => orgsByCity.some((org) => org.id === item.owner_id))
      .filter((item) => (params.age ? item.age === params.age : true))
      .filter((item) => (params.size ? item.size === params.size : true))
      .filter((item) =>
        params.energyLevel ? item.energyLevel === params.energyLevel : true,
      )

    return pets
  }

  async findById(id: string): Promise<Pet | null> {
    return this.items.find((item) => item.id === id) ?? null
  }
}
