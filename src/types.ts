export type Product = {
  id: string
  name: string
  description: string
  image: string
  price: number
  category: 'desk' | 'accessories' | 'tools'
}

export type GalleryItem = {
  id: string
  title: string
  image: string
  material: string
  buildTime: string
}

export type MaterialOption = {
  key: string
  label: string
  multiplier: number
  details: string
}

export type ContactPayload = {
  name: string
  email: string
  message: string
}

export type OrderPayload = {
  fullName: string
  email: string
  material: string
  dimensions: string
  description: string
  fileName: string
}
