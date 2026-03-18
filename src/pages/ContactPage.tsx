import { useState, type FormEventHandler } from 'react'
import { submitContact } from '../api'
import { Reveal } from '../components/Reveal'

const contactCards = [
  {
    title: 'Sales & Quotes',
    detail: 'sales@madx3dstudio.com',
    note: 'For project costing, material recommendations, and timeline planning.',
  },
  {
    title: 'Support Desk',
    detail: '+91 99999 99999',
    note: 'For order status, revisions, or delivery support.',
  },
  {
    title: 'Business Hours',
    detail: 'Mon-Sat, 9:30 AM to 7:00 PM',
    note: 'Priority replies during working hours; urgent requests via WhatsApp.',
  },
]

export function ContactPage() {
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    setStatus('')
    setIsLoading(true)

    const form = new FormData(event.currentTarget)

    try {
      const response = await submitContact({
        name: String(form.get('name') ?? ''),
        email: String(form.get('email') ?? ''),
        message: String(form.get('message') ?? ''),
      })

      setStatus(response.message)
      event.currentTarget.reset()
    } catch {
      setStatus('Unable to submit right now. Please try WhatsApp for priority support.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="section-block contact-shell">
      <Reveal>
        <div className="section-head left">
          <p className="eyebrow">Contact</p>
          <h1>Talk to the team, not just a form</h1>
          <p>
            Use this page for business communication and support. For technical print submission,
            use the Custom Order page.
          </p>
        </div>
      </Reveal>

      <div className="contact-grid">
        <Reveal delay={0.1}>
          <div className="contact-cards">
            {contactCards.map((card) => (
              <article key={card.title} className="contact-card">
                <h3>{card.title}</h3>
                <strong>{card.detail}</strong>
                <p>{card.note}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form className="contact-form" onSubmit={onSubmit}>
            <p className="eyebrow">Quick Inquiry</p>
            <label>
              Name
              <input name="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows={4} required />
            </label>
            <button className="button-primary ripple" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Inquiry'}
            </button>
            {status ? <p className="status-msg">{status}</p> : null}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
