import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  delay: number
}

const animProps = {
  initial: {
    y: 20,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
}

export const FadeInUp = ({ children, delay }: Props) => {
  return (
    <motion.div
      {...animProps}
      whileHover={{
        zIndex: 99
      }}
      transition={{
        duration: 0.4,
        type: 'spring',
        bounce: 0.2,
        delay: delay * 0.1 + 0.7
      }}
    >
      {children}
    </motion.div>
  )
}
