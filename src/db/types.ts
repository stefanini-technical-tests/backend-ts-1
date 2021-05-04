export type ProductType = {
  id: number
  title: string
  price: number
  description: string
  category: string
  categoryId: string
  image: string
}

export type OrderType = {
  id: number
  products: number[]
  date: Date
  subtotal: number
  tax: number
  total: number
  status: 'IN_PROCESS' | 'PAID' | 'IN_TRANSIT' | 'DELIVERED' | 'CANCELED'
}

export type UserType = {
  id: number
  username: string
  email: string
  encrypted_password?: string
  orders: OrderType[]
}
