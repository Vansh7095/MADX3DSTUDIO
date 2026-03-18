import type { GalleryItem, MaterialOption, Product } from '../types'

export const products: Product[] = [
  {
    id: 'p-001',
    name: 'MagGrip Phone Stand',
    description: 'Weighted desktop stand with cable channel and magnetic lock.',
    image:
      'https://images.unsplash.com/photo-1598327105854-8f28f8ddf5bb?auto=format&fit=crop&w=800&q=80',
    price: 599,
    category: 'desk',
  },
  {
    id: 'p-002',
    name: 'Hex Keychain Series',
    description: 'Durable custom keychain with geometric honeycomb pattern.',
    image:
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80',
    price: 249,
    category: 'accessories',
  },
  {
    id: 'p-003',
    name: 'Torque Tool Holder',
    description: 'Wall-ready organizer for precision tools and bits.',
    image:
      'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80',
    price: 799,
    category: 'tools',
  },
  {
    id: 'p-004',
    name: 'Cable Dock Station',
    description: 'Minimal cable dock designed for studio desks.',
    image:
      'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    price: 699,
    category: 'desk',
  },
  {
    id: 'p-005',
    name: 'Prototyping Jig Set',
    description: 'Modular jig kit for rapid engineering iterations.',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    price: 1299,
    category: 'tools',
  },
  {
    id: 'p-006',
    name: 'Studio Nameplate',
    description: 'Customizable desktop brand plate with layered finish.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    price: 499,
    category: 'accessories',
  },
]

export const materials: MaterialOption[] = [
  {
    key: 'pla',
    label: 'PLA',
    multiplier: 1,
    details: 'Best for concept models and decorative prints.',
  },
  {
    key: 'abs',
    label: 'ABS',
    multiplier: 1.35,
    details: 'Impact-resistant and suitable for functional components.',
  },
  {
    key: 'petg',
    label: 'PETG',
    multiplier: 1.2,
    details: 'Strong, weather-resistant and production-ready.',
  },
  {
    key: 'nylon',
    label: 'Nylon',
    multiplier: 1.65,
    details: 'High durability for mechanical use-cases.',
  },
]

export const gallery: GalleryItem[] = [
  {
    id: 'g-001',
    title: 'Automotive Air Vent Adapter',
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1000&q=80',
    material: 'PETG',
    buildTime: '3h 20m',
  },
  {
    id: 'g-002',
    title: 'Architectural Scale Model',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
    material: 'PLA',
    buildTime: '9h 10m',
  },
  {
    id: 'g-003',
    title: 'Custom Desk Organizer',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80',
    material: 'ABS',
    buildTime: '4h 45m',
  },
  {
    id: 'g-004',
    title: 'Drone Mount Prototype',
    image:
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1000&q=80',
    material: 'Nylon',
    buildTime: '6h 30m',
  },
]
