import { Organization } from '@prisma/client'
import { IOrganizationRepository } from '../repositories/interfaces/IOrganizationRepository'
import { OrganizationNotFoundError } from './errors/org-not-found-error'

interface GetOrganizationUseCaseRequest {
  id: string
}

interface GetOrganizationUseCaseResponse {
  organization: Organization
}

export class GetOrganizationUseCase {
  constructor(private organizationRepository: IOrganizationRepository) {}

  async execute({
    id,
  }: GetOrganizationUseCaseRequest): Promise<GetOrganizationUseCaseResponse> {
    const organization = await this.organizationRepository.findById(id)

    if (!organization) throw new OrganizationNotFoundError()

    return { organization }
  }
}
