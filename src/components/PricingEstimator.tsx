import { useMemo, useState } from 'react'
import { materials } from '../data/catalog'
import { estimatePrice } from '../utils/pricing'
import { AnimatedCounter } from './AnimatedCounter'

type PricingEstimatorProps = {
  compact?: boolean
}

export function PricingEstimator({ compact = false }: PricingEstimatorProps) {
  const [size, setSize] = useState(12)
  const [complexity, setComplexity] = useState(1)
  const [material, setMaterial] = useState(materials[0].key)

  const price = useMemo(
    () => estimatePrice(size, material, complexity),
    [size, material, complexity],
  )

  return (
    <section className={compact ? 'estimator compact' : 'estimator'}>
      <div>
        <p className="eyebrow">Pricing Estimator</p>
        <h2>Live instant estimate</h2>
        <p>
          Tune model size and complexity to get a near-real-time quote before uploading files.
        </p>
      </div>

      <label>
        Size: {size} cm
        <input
          type="range"
          min={4}
          max={40}
          step={1}
          value={size}
          onChange={(event) => setSize(Number(event.target.value))}
        />
      </label>

      <label>
        Complexity: {complexity.toFixed(1)}x
        <input
          type="range"
          min={1}
          max={2.5}
          step={0.1}
          value={complexity}
          onChange={(event) => setComplexity(Number(event.target.value))}
        />
      </label>

      <label>
        Material
        <select value={material} onChange={(event) => setMaterial(event.target.value)}>
          {materials.map((item) => (
            <option key={item.key} value={item.key}>
              {item.label}
            </option>
          ))}
        </select>
      </label>

      <div className="estimate-value">
        <span>Estimated Cost</span>
        <strong>
          <AnimatedCounter value={price} prefix="Rs. " />
        </strong>
      </div>
    </section>
  )
}
