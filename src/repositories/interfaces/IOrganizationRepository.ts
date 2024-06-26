import { Organization, Prisma } from '@prisma/client'

export interface IOrganizationRepository {
  findByEmail(email: string): Promise<Organization | null>
  create(data: Prisma.OrganizationCreateInput): Promise<Organization>
}
