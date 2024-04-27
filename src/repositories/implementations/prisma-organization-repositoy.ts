import { type Prisma } from '@prisma/client'
import { prisma } from '../../lib/prisma'

import { IOrganizationRepository } from '../interfaces/IOrganizationRepository'

export class PrismaOrganizationRepository implements IOrganizationRepository {
  async findByEmail(email: string) {
    const organization = await prisma.organization.findUnique({
      where: {
        email,
      },
    })

    return organization
  }

  async create(data: Prisma.OrganizationCreateInput) {
    const organization = await prisma.organization.create({
      data,
    })

    return organization
  }
}
