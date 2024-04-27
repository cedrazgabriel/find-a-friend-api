import { PrismaOrganizationRepository } from '../../repositories/implementations/prisma-organization-repositoy'
import { CreateOrganizationUseCase } from '../create-org'

export function makeCreateOrganizationUseCase() {
  const organizationRepository = new PrismaOrganizationRepository()

  const createOrganizationUseCase = new CreateOrganizationUseCase(
    organizationRepository,
  )

  return createOrganizationUseCase
}
