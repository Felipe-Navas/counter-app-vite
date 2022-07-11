import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Testing the 02-template-string', () => {
  test('should say Hola Felipao', () => {
    const name = 'Felipao'
    const message = getSaludo(name)

    expect(message).toBe(`Hola ${name}`)
   })
 })