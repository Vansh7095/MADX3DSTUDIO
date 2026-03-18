import { products } from '../data/catalog'
import { ProductCard } from '../components/ProductCard'
import { Reveal } from '../components/Reveal'

export function ServicesPage() {
  return (
    <section className="section-block">
      <Reveal>
        <div className="section-head left">
          <p className="eyebrow">Services</p>
          <h1>Ready-to-order printed products</h1>
          <p>Dynamic inventory rendered from structured data to keep content scalable.</p>
        </div>
      </Reveal>

      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  )
}
