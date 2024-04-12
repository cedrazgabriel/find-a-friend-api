import { describe, expect, test } from 'vitest'

describe('teste de soma', () => {
  test('verifica se 1 + 1 é 2', async () => {
    const num1 = 1
    const num2 = 1

    // valida se o id do pet criado é uma string
    expect(num1 + num2).toEqual(2)
  })
})
