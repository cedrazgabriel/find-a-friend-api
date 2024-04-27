import { type Pet, type Prisma } from '@prisma/client'
import internal from 'stream'

export interface IPetsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
}
