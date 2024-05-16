import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryOrganizationRepository } from '../repositories/in-memory/in-memory-organization-repository'
import { InMemoryPetsRepository } from '../repositories/in-memory/in-memory-pets-repository'
import { SearchPetsUseCase } from './search-pet'
import { MakeOrganization } from '../../tests/factories/make-organization'
import { makePet } from '../../tests/factories/make-pet'

describe('Search Pets Use Case Testes', () => {
  let orgsRepository: InMemoryOrganizationRepository
  let petsRepository: InMemoryPetsRepository
  let sut: SearchPetsUseCase

  beforeEach(() => {
    orgsRepository = new InMemoryOrganizationRepository()
    petsRepository = new InMemoryPetsRepository(orgsRepository)
    sut = new SearchPetsUseCase(petsRepository)
  })

  it('deve ser possível buscar pets pela cidade', async () => {
    const org = await orgsRepository.create(MakeOrganization())

    await petsRepository.create(makePet({ owner_id: org.id }))
    await petsRepository.create(makePet({ owner_id: org.id }))

    const org2 = await orgsRepository.create(MakeOrganization())

    await petsRepository.create(makePet({ owner_id: org2.id }))

    const { pets } = await sut.execute({ city: org.city })

    expect(pets).toHaveLength(2)

    const { pets: pets2 } = await sut.execute({ city: org2.city })

    expect(pets2).toHaveLength(1)
  })

  it('deve ser possível buscar pets pela cidade e idade', async () => {
    const org = await orgsRepository.create(MakeOrganization())

    await petsRepository.create(makePet({ owner_id: org.id, age: '1' }))
    await petsRepository.create(makePet({ owner_id: org.id }))

    const { pets } = await sut.execute({ city: org.city, age: '1' })

    expect(pets).toHaveLength(1)
  })

  it('deve ser possível buscar pets pela cidade e tamanho', async () => {
    const org = await orgsRepository.create(MakeOrganization())

    await petsRepository.create(makePet({ owner_id: org.id, size: 'small' }))
    await petsRepository.create(makePet({ owner_id: org.id, size: 'medium' }))
    await petsRepository.create(makePet({ owner_id: org.id, size: 'large' }))

    const { pets } = await sut.execute({ city: org.city, size: 'small' })

    expect(pets).toHaveLength(1)
  })

  it('deve ser possível buscar pets pela cidade e nível de energia', async () => {
    const org = await orgsRepository.create(MakeOrganization())

    await petsRepository.create(
      makePet({ owner_id: org.id, energyLevel: 'low' }),
    )
    await petsRepository.create(
      makePet({ owner_id: org.id, energyLevel: 'medium' }),
    )
    await petsRepository.create(
      makePet({ owner_id: org.id, energyLevel: 'high' }),
    )

    const { pets } = await sut.execute({ city: org.city, energyLevel: 'low' })

    expect(pets).toHaveLength(1)
  })
})
