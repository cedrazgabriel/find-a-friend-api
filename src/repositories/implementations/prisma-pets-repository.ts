import { type Prisma, type Pet } from '@prisma/client'
import { prisma } from '../../lib/prisma'
import {
  FindAllParams,
  type IPetsRepository,
} from '../interfaces/IPetsRepository'

export class PrismaPetRepository implements IPetsRepository {
  async create(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {
    const pet = await prisma.pet.create({ data })

    return pet
  }

  async findAll(params: FindAllParams): Promise<Pet[]> {
    const whereClause: any = {
      owner: {
        city: {
          contains: params.city,
          mode: 'insensitive',
        },
      },
    }

    if (params.age !== undefined) {
      whereClause.age = params.age
    }

    if (params.size !== undefined) {
      whereClause.size = params.size
    }

    if (params.energyLevel !== undefined) {
      whereClause.energyLevel = params.energyLevel
    }

    const pets = await prisma.pet.findMany({
      where: whereClause,
    })

    return pets
  }

  async findById(id: string): Promise<Pet | null> {
    const pet = await prisma.pet.findUnique({ where: { id } })

    return pet
  }
}
