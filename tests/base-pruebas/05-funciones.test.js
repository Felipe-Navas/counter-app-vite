import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones'

describe('Testing 05-funciones', () => {
  test('should return a user object', () => {
    const user = getUser()

    expect(user).toEqual({
      uid: 'ABC123',
      username: 'usernumber1502',
    })
  })

  test('should get a user active', () => {
    const user = getUsuarioActivo('userActive')

    expect(user).toEqual({
      uid: 'ABC567',
      username: 'userActive',
    })
  })
})
