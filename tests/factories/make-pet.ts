import { faker } from '@faker-js/faker'
import crypto from 'node:crypto'

type Overwrite = {
  owner_id?: string
  age?: string
  size?: string
  energyLevel?: string
}

export function makePet(overwrite?: Overwrite) {
  return {
    id: crypto.randomUUID(),
    owner_id: overwrite?.owner_id ?? crypto.randomUUID(),
    name: faker.animal.dog(),
    about: faker.lorem.paragraph(),
    age: overwrite?.age ?? faker.number.int().toString(),
    size:
      overwrite?.size ??
      faker.helpers.arrayElement(['small', 'medium', 'large']),
    energyLevel:
      overwrite?.energyLevel ??
      faker.helpers.arrayElement(['low', 'medium', 'high']),
  }
}
