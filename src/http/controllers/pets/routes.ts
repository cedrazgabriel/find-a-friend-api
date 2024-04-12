import { FastifyInstance } from 'fastify'
import { create } from './create'

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
          age: { type: 'number' },
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
            age: { type: 'number' },
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
      create(req, res)
    },
  })
}
