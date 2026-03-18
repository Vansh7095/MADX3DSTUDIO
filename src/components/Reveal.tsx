import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import type { PropsWithChildren } from 'react'

type RevealProps = PropsWithChildren<{
  delay?: number
  y?: number
  className?: string
}>

export function Reveal({ children, delay = 0, y = 24, className }: RevealProps) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
