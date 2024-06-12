import { FastifyInstance } from 'fastify'
import { createPetController } from './create'
import { searchPetsController } from './search'
import { getPetController } from './get'

export async function petRoutes(app: FastifyInstance) {
  app.post('/pets', {
    schema: {
      description: 'Criar um novo pet',
      tags: ['Pets'],
      summary: 'Esse endpoint é responsável por criar um novo pet',
      body: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          age: { type: 'string' },
          about: { type: 'string' },
          size: { type: 'string' },
          energyLevel: { type: 'string' },
          ownerId: { type: 'string' },
        },
      },
      response: {
        201: {
          description: 'Sucesso ao criar um novo pet',
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            age: { type: 'string' },
            about: { type: 'string' },
            size: { type: 'string' },
            created_at: { type: 'string' },
            updated_at: { type: 'string' },
            owner_id: { type: 'string' },
          },
        },
      },
    },
    handler: (req, res) => {
      createPetController(req, res)
    },
  })

  app.get('/pets', searchPetsController)
     
  
  app.get('/pets/:id', getPetController)
}
