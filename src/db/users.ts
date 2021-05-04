import { hashSync } from 'bcrypt'

import type { UserType } from './types'

export const users: UserType[] = [
  {
    id: 1,
    username: 'user',
    email: 'user@example.com',
    encrypted_password: hashSync('superSECRET123', 10),
    orders: [
      {
        id: 1,
        products: [1, 2],
        date: new Date(),
        subtotal: 132.25,
        tax: 25.13,
        total: 157.38,
        status: 'DELIVERED'
      },
      {
        id: 1,
        products: [3],
        date: new Date(),
        subtotal: 55.99,
        tax: 10.64,
        total: 66.63,
        status: 'CANCELED'
      }
    ]
  }
]

export function getUserById(id: number) {
  const userFound = users.find((user) => user.id === id)

  return new Promise<UserType>((resolve, reject) => {
    if (!userFound) {
      setTimeout(() => {
        return reject('Incorrect username or password')
      }, 250)
    } else {
      setTimeout(() => {
        return resolve(userFound)
      }, 250)
    }
  })
}

export function getUserByUsername(username: string) {
  const userFound = users.find((user) => user.username === username)

  return new Promise<UserType>((resolve, reject) => {
    if (!userFound) {
      setTimeout(() => {
        return reject('Incorrect username or password')
      }, 250)
    } else {
      setTimeout(() => {
        return resolve(userFound)
      }, 250)
    }
  })
}
