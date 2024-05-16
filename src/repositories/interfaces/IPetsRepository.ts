import { type Pet, type Prisma } from '@prisma/client'

export interface FindAllParams {
  city: string
  age?: string
  size?: string
  energyLevel?: string
}

export interface IPetsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  findAll(params: FindAllParams): Promise<Pet[]>
}
