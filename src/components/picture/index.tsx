'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Picture = () => (
  <motion.figure
    initial={{
      opacity: 0,
      y: -15
    }}
    animate={{
      opacity: 1,
      y: 0
    }}
    transition={{
      duration: 1
    }}
  >
    <Image src="/assets/photo.png" alt="Victor Hugo Cépil" layout="fill" />
  </motion.figure>
)
