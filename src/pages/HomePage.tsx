import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { products, gallery } from '../data/catalog'
import { PricingEstimator } from '../components/PricingEstimator'
import { ProductCard } from '../components/ProductCard'
import { Reveal } from '../components/Reveal'

export function HomePage() {
  const { scrollYProgress } = useScroll()
  const orbitY = useTransform(scrollYProgress, [0, 1], [0, -180])
  const glowX = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <>
      <section className="hero-section">
        <motion.div className="hero-orb" style={{ y: orbitY }} />
        <motion.div className="hero-glow" style={{ x: glowX }} />

        <Reveal>
          <p className="eyebrow">Premium 3D Printing Studio</p>
          <h1>Custom 3D Printing - From Idea to Reality</h1>
          <p className="hero-copy">
            Production-grade prints, material intelligence, and smooth delivery from concept files
            to final parts.
          </p>
          <div className="hero-actions">
            <Link to="/custom-order" className="button-primary ripple">
              Upload Your Design
            </Link>
            <Link to="/contact" className="button-ghost">
              Speak With Team
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section-block">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Ready Products</p>
            <h2>High-demand printed essentials</h2>
          </div>
        </Reveal>
        <div className="product-grid">
          {products.slice(0, 3).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        <div className="center-row">
          <Link to="/services" className="button-ghost">
            View All Services
          </Link>
        </div>
      </section>

      <section className="section-block parallax-strip">
        <PricingEstimator compact />
      </section>

      <section className="section-block">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Recent Builds</p>
            <h2>Precision projects delivered</h2>
          </div>
        </Reveal>
        <div className="gallery-preview">
          {gallery.slice(0, 3).map((item, index) => (
            <motion.article
              key={item.id}
              className="gallery-tile"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div>
                <h3>{item.title}</h3>
                <p>
                  {item.material} • {item.buildTime}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}
