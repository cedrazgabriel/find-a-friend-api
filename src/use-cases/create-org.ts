import { Organization } from '@prisma/client'
import { IOrganizationRepository } from '../repositories/interfaces/IOrganizationRepository'
import { OrgAlreadyExistsErros } from './errors/org-already-exists-error'
import { hash } from 'bcryptjs'

interface CreateOrganizationRequest {
  name: string
  email: string
  password: string
  whatsapp: string
  cep: string
  state: string
  city: string
  neighborhood: string
  street: string
  latitude: number
  longitude: number
}

interface CreateOrganizationResponse {
  org: Organization
}

export class CreateOrganizationUseCase {
  constructor(private organizationRepository: IOrganizationRepository) {}
  async execute({
    name,
    email,
    password,
    whatsapp,
    cep,
    state,
    city,
    neighborhood,
    street,
    latitude,
    longitude,
  }: CreateOrganizationRequest): Promise<CreateOrganizationResponse> {
    const organizationAlreadyExists =
      await this.organizationRepository.findByEmail(email)

    if (organizationAlreadyExists) throw new OrgAlreadyExistsErros()

    const hashedPassword = await hash(password, 8)
    const organization = await this.organizationRepository.create({
      name,
      email,
      password: hashedPassword,
      whatsapp,
      cep,
      state,
      city,
      neighborhood,
      street,
      latitude,
      longitude,
    })

    return { org: organization }
  }
}
