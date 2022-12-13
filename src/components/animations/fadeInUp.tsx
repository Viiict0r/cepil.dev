'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Props = {
  delay?: number
  duration: number
  children: React.ReactNode
  inViewOnly?: boolean
}

export function FadeInUp({
  duration,
  delay = 0,
  children,
  inViewOnly = false
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true
  })

  return (
    <motion.div
      ref={ref}
      initial={{
        y: 15,
        opacity: 0
      }}
      animate={{
        y: inViewOnly ? (isInView ? 0 : 15) : 0,
        opacity: inViewOnly ? (isInView ? 1 : 0) : 1
      }}
      transition={{
        duration,
        delay
      }}
    >
      {children}
    </motion.div>
  )
}
