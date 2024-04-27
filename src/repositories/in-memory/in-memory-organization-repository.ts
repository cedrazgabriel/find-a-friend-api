import { Organization, Prisma } from '@prisma/client'
import { randomUUID } from 'crypto'
import { IOrganizationRepository } from '../interfaces/IOrganizationRepository'
import { Decimal } from '@prisma/client/runtime/library'

export class InMemoryOrganizationRepository implements IOrganizationRepository {
  public items: Organization[] = []

  async findByEmail(email: string) {
    return this.items.find((item) => item.email === email) || null
  }

  async create(data: Prisma.OrganizationCreateInput) {
    const organization = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password: data.password,
      whatsapp: data.whatsapp,
      cep: data.cep,
      state: data.state,
      city: data.city,
      neighborhood: data.neighborhood,
      street: data.street,
      latitude: new Decimal(data.latitude.toString()),
      longitude: new Decimal(data.longitude.toString()),
      created_at: new Date(),
      updated_at: new Date(),
    }

    this.items.push(organization)

    return organization
  }
}
