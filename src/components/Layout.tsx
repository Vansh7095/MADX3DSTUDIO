import { NavLink } from 'react-router-dom'
import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { WhatsAppButton } from './WhatsAppButton'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/custom-order', label: 'Custom Order' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="app-frame">
      <header className="site-header">
        <div className="brand">MADX 3D Studio</div>
        <nav>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <motion.a
          href="/custom-order"
          className="button-primary"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Start Project
        </motion.a>
      </header>

      {children}

      <footer className="site-footer">
        <p>Precision 3D printing, rapid prototypes, and premium finishing.</p>
        <small>2026 MADX 3D Studio. Built for speed, crafted for detail.</small>
      </footer>
      <WhatsAppButton />
    </div>
  )
}
