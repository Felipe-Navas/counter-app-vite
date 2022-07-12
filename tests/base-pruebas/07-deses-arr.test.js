import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Testing the 07-deses-arr', () => {
  test('should return a string and a number', () => {
    const [ letters, numbers ] = retornaArreglo()
    expect(typeof letters).toBe('string')
    expect(letters).toBe('ABC')
    expect(typeof numbers).toBe('number')
    expect(numbers).toBe(123)
   })
 })