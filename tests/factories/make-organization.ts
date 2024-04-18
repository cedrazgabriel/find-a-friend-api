import { faker } from '@faker-js/faker'
import { randomUUID } from 'crypto'

type Overwrite = {
  password?: string
  email?: string
}
export function MakeOrganization(overwite?: Overwrite) {
  return {
    id: randomUUID(),
    name: faker.company.name(),
    email: overwite?.email || faker.internet.email(),
    password: overwite?.password || faker.internet.password(),
    whatsapp: faker.phone.number(),
    cep: faker.location.zipCode(),
    state: faker.location.state(),
    city: faker.location.city(),
    neighborhood: faker.location.streetAddress(),
    street: faker.location.street(),
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
  }
}
