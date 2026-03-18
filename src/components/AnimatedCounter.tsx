import { animated, useSpring } from '@react-spring/web'
import { useEffect } from 'react'

type AnimatedCounterProps = {
  value: number
  prefix?: string
}

export function AnimatedCounter({ value, prefix = '' }: AnimatedCounterProps) {
  const [styles, api] = useSpring(() => ({ number: value }))

  useEffect(() => {
    api.start({ number: value, config: { tension: 170, friction: 24 } })
  }, [api, value])

  return (
    <animated.span>
      {styles.number.to((n) => `${prefix}${Math.round(n).toLocaleString('en-IN')}`)}
    </animated.span>
  )
}
