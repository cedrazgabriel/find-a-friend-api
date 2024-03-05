import { type Prisma, type Pet } from '@prisma/client'
import { prisma } from '../../lib/prisma'
import { type IPetsRepository } from '../interfaces/IPetsRepository'

export class PrismaPetRepository implements IPetsRepository {
  async create(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {
    const pet = await prisma.pet.create({ data })

    return pet
  }
}
