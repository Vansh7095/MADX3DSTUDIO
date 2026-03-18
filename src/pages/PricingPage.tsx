import { materials } from '../data/catalog'
import { PricingEstimator } from '../components/PricingEstimator'
import { Reveal } from '../components/Reveal'

export function PricingPage() {
  return (
    <section className="section-block">
      <Reveal>
        <div className="section-head left">
          <p className="eyebrow">Pricing Intelligence</p>
          <h1>Estimate before you print</h1>
          <p>
            Live calculation adjusts with model size, complexity and material selection in real
            time.
          </p>
        </div>
      </Reveal>

      <PricingEstimator />

      <div className="material-grid">
        {materials.map((material, index) => (
          <Reveal key={material.key} delay={index * 0.08}>
            <article className="material-card">
              <h3>{material.label}</h3>
              <p>{material.details}</p>
              <strong>{material.multiplier.toFixed(2)}x base rate</strong>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
