import { materials } from '../data/catalog'

const baseRate = 8

export const estimatePrice = (sizeCm: number, materialKey: string, complexity = 1) => {
  const material = materials.find((item) => item.key === materialKey)
  const multiplier = material ? material.multiplier : 1
  const volumeFactor = Math.max(1, sizeCm * 0.9)
  const subtotal = baseRate * volumeFactor * multiplier * complexity

  return Math.round(subtotal)
}
