import { PrismaPetRepository } from '../../repositories/implementations/prisma-pets-repository'
import { SearchPetsUseCase } from '../search-pet'

export function makeSearchPetsUseCase() {
  return new SearchPetsUseCase(new PrismaPetRepository())
}
