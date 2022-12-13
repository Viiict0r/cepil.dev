'use client'

import React, { useEffect } from 'react'
import { FadeInUp } from '../animations/fadeInUp'
import { useScroll, motion, useMotionValue } from 'framer-motion'

import styles from './styles.module.scss'
import { IoIosArrowUp } from 'react-icons/io'

export const Arrow = () => {
  const { scrollYProgress } = useScroll()
  const opacity = useMotionValue(1)

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.scroll(0, 0)

    scrollYProgress.onChange(value => {
      opacity.set(1 - (value + value * 1.6))
    })
  }, [])

  return (
    <div className={styles.arrow_wrapper} role="button" onClick={scrollDown}>
      <FadeInUp duration={0.3} delay={1}>
        <motion.div style={{ opacity }} className={styles.arrow_down} />
      </FadeInUp>
    </div>
  )
}

export const BackToTop = () => {
  return (
    <div className={styles.back_to_top}>
      <span
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        role="button"
      >
        Voltar ao topo <IoIosArrowUp />
      </span>
    </div>
  )
}
