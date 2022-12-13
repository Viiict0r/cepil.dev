'use client'

import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion'

import styles from './styles.module.scss'
import { useIsMobile } from '../../../hooks/use-is-mobile'

type Props = {
  year?: number
  month: string
  title: string
  description: string
  company: string
  location: string
  side: 'right' | 'left'
  customWidth?: number
  techs: string[]
}

export const Story = ({
  title,
  description,
  month,
  side,
  year,
  company,
  location,
  techs,
  customWidth = 350
}: Props) => {
  const isMobile = useIsMobile()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true
  })

  const Details = (
    <div
      className={`${styles.details} ${isMobile ? styles.right : styles[side]}`}
      style={{
        maxWidth: customWidth
      }}
    >
      <motion.small
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: isInView ? 0 : 10,
          opacity: isInView ? 1 : 0
        }}
        transition={{
          duration: 0.5
        }}
      >
        {month}
      </motion.small>
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: isInView ? 0 : 10,
          opacity: isInView ? 1 : 0
        }}
        transition={{
          duration: 0.5,
          delay: 0.2
        }}
      >
        {title}
      </motion.span>
      <motion.small
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: isInView ? 0 : 10,
          opacity: isInView ? 1 : 0
        }}
        transition={{
          duration: 0.5,
          delay: 0.4
        }}
      >
        {company}&nbsp;&nbsp;<b>·</b>&nbsp;&nbsp;{location}
      </motion.small>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: isInView ? 0 : 10,
          opacity: isInView ? 1 : 0
        }}
        transition={{
          duration: 0.5,
          delay: 0.6
        }}
      >
        {description}
      </motion.p>
      <div className={styles.badge_wrapper}>
        {techs.map((tech, index) => (
          <motion.div
            key={tech}
            className={styles.badge}
            initial={{ y: 10, opacity: 0 }}
            animate={{
              y: isInView ? 0 : 10,
              opacity: isInView ? 1 : 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.7 + (index + 1) / 10
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </div>
  )

  const Year = (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: isInView ? 0 : -30, opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.7 }}
      className={`${styles.year} ${isMobile ? styles.right : styles[side]}`}
    >
      {year && <h2>{year}</h2>}
    </motion.div>
  )

  if (isMobile) {
    return (
      <div className={styles.container} ref={ref}>
        {Year}
        <div className={styles.ball} />
        {Details}
      </div>
    )
  }

  return (
    <div className={styles.container} ref={ref}>
      {side === 'right' && Year}
      {side === 'left' && Details}
      <div className={styles.ball} />
      {side === 'right' && Details}
      {side === 'left' && Year}
    </div>
  )
}
