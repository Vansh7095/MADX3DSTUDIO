import { motion } from 'framer-motion'
import { useState, type ChangeEventHandler, type FormEventHandler } from 'react'
import { submitOrder } from '../api'
import { materials } from '../data/catalog'
import { Reveal } from '../components/Reveal'

const orderSteps = [
  {
    title: '1. File Review',
    text: 'We validate mesh integrity, wall thickness, and tolerance risk before quoting.',
  },
  {
    title: '2. Print Strategy',
    text: 'Material, orientation, infill, and layer profile are mapped to your use-case.',
  },
  {
    title: '3. Production + QC',
    text: 'Parts are printed, inspected, and packed with dimensional quality checks.',
  },
]

export function CustomOrderPage() {
  const [fileName, setFileName] = useState('')
  const [status, setStatus] = useState('')
  const [isDragging, setIsDragging] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const onFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.[0]
    setFileName(file?.name ?? '')
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    setStatus('')
    setIsSending(true)

    const form = new FormData(event.currentTarget)

    try {
      const response = await submitOrder({
        fullName: String(form.get('fullName') ?? ''),
        email: String(form.get('email') ?? ''),
        material: String(form.get('material') ?? ''),
        dimensions: String(form.get('dimensions') ?? ''),
        description: String(form.get('description') ?? ''),
        fileName,
      })

      setStatus(response.message)
      event.currentTarget.reset()
      setFileName('')
    } catch {
      setStatus('Submission failed. Please retry or send details on WhatsApp.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="section-block custom-order-shell">
      <Reveal>
        <div className="section-head left">
          <p className="eyebrow">Custom Order</p>
          <h1>Production-grade custom print request</h1>
          <p>
            Built for customers ready to manufacture parts. Share print goals, quantities and
            tolerances for an accurate production quote.
          </p>
        </div>
      </Reveal>

      <div className="order-layout">
        <Reveal delay={0.1}>
          <aside className="order-process">
            <h2>How custom production works</h2>
            <p>Typical quote turnaround: within 4 business hours.</p>
            <div className="order-step-list">
              {orderSteps.map((step) => (
                <article key={step.title} className="order-step-card">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </aside>
        </Reveal>

        <motion.form
          className="order-form"
          onSubmit={onSubmit}
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
        >
          {[
            <label key="name">
              Full Name
              <input name="fullName" required />
            </label>,
            <label key="email">
              Work Email
              <input name="email" type="email" required />
            </label>,
            <label key="dimensions">
              Part Dimensions
              <input name="dimensions" placeholder="e.g. 120mm x 60mm x 40mm" required />
            </label>,
            <label key="quantity">
              Quantity
              <input name="quantity" type="number" min={1} placeholder="e.g. 10" required />
            </label>,
            <label key="material">
              Material
              <select name="material" required defaultValue={materials[0].key}>
                {materials.map((material) => (
                  <option key={material.key} value={material.key}>
                    {material.label}
                  </option>
                ))}
              </select>
            </label>,
            <label key="description">
              Use-Case / Tolerance Notes
              <textarea
                name="description"
                rows={5}
                placeholder="Where is this part used? Any load, finish, fitment or tolerance requirements?"
                required
              />
            </label>,
          ].map((field) => (
            <motion.div
              key={field.key}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {field}
            </motion.div>
          ))}

          <motion.label
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={isDragging ? 'upload-zone dragging' : 'upload-zone'}
            onDragEnter={() => setIsDragging(true)}
            onDragOver={(event) => event.preventDefault()}
            onDragLeave={() => setIsDragging(false)}
            onDrop={() => setIsDragging(false)}
          >
            <span>{fileName || 'Drag and drop STL/OBJ here or click to upload'}</span>
            <input
              type="file"
              accept=".stl,.obj"
              name="designFile"
              onChange={onFileChange}
              required
            />
          </motion.label>

          <motion.button
            className="button-primary ripple"
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            disabled={isSending}
          >
            {isSending ? 'Submitting...' : 'Request Production Quote'}
          </motion.button>
          {status ? <p className="status-msg">{status}</p> : null}
        </motion.form>
      </div>
    </section>
  )
}
