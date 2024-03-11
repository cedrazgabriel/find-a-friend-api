import { PrismaPetRepository } from '../../repositories/implementations/prisma-pets-repository'
import { CreatePetUseCase } from '../create-pet'

export function makeCreatePetUseCase() {
  const petsRepository = new PrismaPetRepository()

  const createPetUseCase = new CreatePetUseCase(petsRepository)

  return createPetUseCase
}
