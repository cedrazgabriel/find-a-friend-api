import { PrismaPetRepository } from '../../repositories/implementations/prisma-pets-repository'
import { GetPetUseCase } from '../get-pet'

export function makeGetPetUseCase() {
  return new GetPetUseCase(new PrismaPetRepository())
}
