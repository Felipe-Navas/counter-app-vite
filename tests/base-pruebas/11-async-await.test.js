import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Testing the 11-async-await', () => {
  test('should return an image URL', async() => {

    const url = await getImagen()
    console.log(url)
    expect(typeof url).toBe('string')
  })
 })