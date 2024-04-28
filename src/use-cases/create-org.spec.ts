import { beforeEach, describe, expect, test } from 'vitest'
import { CreateOrganizationUseCase } from './create-org'
import { InMemoryOrganizationRepository } from '../repositories/in-memory/in-memory-organization-repository'
import { OrgAlreadyExistsErros } from './errors/org-already-exists-error'

let sut: CreateOrganizationUseCase
let organizationRepository: InMemoryOrganizationRepository

describe('Create Organization Use Case Tests', () => {
  beforeEach(() => {
    organizationRepository = new InMemoryOrganizationRepository()
    sut = new CreateOrganizationUseCase(organizationRepository)
  })

  test('deve ser possível criar uma org', async () => {
    const { org } = await sut.execute({
      name: 'ONG',
      cep: '12345678',
      city: 'São Paulo',
      email: 'organization@organization.com',
      latitude: 21212,
      longitude: 21212,
      neighborhood: 'Bairro',
      password: '12345678',
      state: 'SP',
      street: 'Rua',
      whatsapp: '12345678',
    })

    // teste coderrabbit

    // valida se o id do pet criado é uma string
    expect(org.id).toEqual(expect.any(String))
  })

  test('não deve ser possível criar uma org com o mesmo email', async () => {
    const { org } = await sut.execute({
      name: 'ONG',
      cep: '12345678',
      city: 'São Paulo',
      email: 'organization@organization.com',
      latitude: 3232,
      longitude: 32323,
      neighborhood: 'Bairro',
      password: '12345678',
      state: 'SP',
      street: 'Rua',
      whatsapp: '12345678',
    })

    expect(async () => {
      await sut.execute({
        name: 'ONG',
        cep: '12345678',
        city: 'São Paulo',
        email: org.email,
        latitude: 1212,
        longitude: 23232,
        neighborhood: 'Bairro',
        password: '12345678',
        state: 'SP',
        street: 'Rua',
        whatsapp: '12345678',
      })
    }).rejects.toBeInstanceOf(OrgAlreadyExistsErros)
  })
})
