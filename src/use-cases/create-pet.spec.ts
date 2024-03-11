import { beforeEach, describe, expect, test } from 'vitest'
import { InMemoryPetsRepository } from '../repositories/in-memory/in-memory-pets-repository'
import { CreatePetUseCase } from './create-pet'

let sut: CreatePetUseCase
let petRepository: InMemoryPetsRepository

describe('Create Pet Use Case Tests', () => {
  beforeEach(() => {
    petRepository = new InMemoryPetsRepository()
    sut = new CreatePetUseCase(petRepository)
  })

  test('should create a pet', async () => {
    const { pet } = await sut.execute({
      name: 'Rex',
      age: 5,
      about: 'A very good',
      size: 'M',
      energyLevel: 'M',
      ownerId: '123',
    })

    // valida se o id do pet criado é uma string
    expect(pet.id).toEqual(expect.any(String))
  })
})
