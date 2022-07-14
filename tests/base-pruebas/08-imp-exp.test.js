import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp'

describe('Testing the 08-imp-exp', () => {
  test('should return an hero by id', () => {
    const hero = getHeroeById(1)

    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC',
    })
  })

  test('should return undefined calling hero by id', () => {
    const hero = getHeroeById(100)

    expect(hero).toBeFalsy()
  })

  test('should return the DC heroes', () => {
    const heroes = getHeroesByOwner('DC')

    expect(heroes).toEqual([
      {
        id: 1,
        name: 'Batman',
        owner: 'DC',
      },
      {
        id: 3,
        name: 'Superman',
        owner: 'DC',
      },
      {
        id: 4,
        name: 'Flash',
        owner: 'DC',
      },
    ])
    expect(heroes.length).toBe(3)
  })

  test('should return the Marvel heroes', () => {
    const heroes = getHeroesByOwner('Marvel')

    expect(heroes).toEqual([
      {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel',
      },
      {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel',
      },
    ])
    expect(heroes.length).toBe(2)
  })
})
