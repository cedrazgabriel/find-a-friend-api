import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryOrganizationRepository } from '../repositories/in-memory/in-memory-organization-repository'
import { GetOrganizationUseCase } from './get-organization'
import { MakeOrganization } from '../../tests/factories/make-organization'
import { OrganizationNotFoundError } from './errors/org-not-found-error'

describe('Get Organization Use Case', () => {
  let organizationRepository: InMemoryOrganizationRepository
  let sut: GetOrganizationUseCase

  beforeEach(() => {
    organizationRepository = new InMemoryOrganizationRepository()
    sut = new GetOrganizationUseCase(organizationRepository)
  })

  it('Deve ser possível buscar uma organização', async () => {
    const organization = await organizationRepository.create(MakeOrganization())
    const result = await sut.execute({ id: organization.id })

    expect(result.organization).toEqual(organization)
    expect(organizationRepository.items[0].id).toEqual(organization.id)
  })

  it('Não deve ser possível buscar uma organização que não existe', async () => {
    await expect(sut.execute({ id: 'invalid' })).rejects.toBeInstanceOf(
      OrganizationNotFoundError,
    )
  })
})
