import { useState, type MouseEventHandler } from 'react'
import { motion } from 'framer-motion'
import type { Product } from '../types'

type ProductCardProps = {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const onMove: MouseEventHandler<HTMLDivElement> = (event) => {
    const card = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - card.left
    const y = event.clientY - card.top

    const rx = ((y / card.height) - 0.5) * -8
    const ry = ((x / card.width) - 0.5) * 10

    setRotate({ x: rx, y: ry })
  }

  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
    >
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
      </div>
      <div className="product-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-meta">
          <span className="tag">{product.category}</span>
          <strong>Rs. {product.price}</strong>
        </div>
      </div>
    </motion.article>
  )
}
