'use client'

import React from 'react'
import { motion, useWillChange } from 'framer-motion'

import TechNextjs from '../../icons/tech-nextjs.svg'
import TechReact from '../../icons/tech-reactjs.svg'
import TechTs from '../../icons/tech-typescript.svg'
import TechNode from '../../icons/tech-nodejs.svg'
import TechGit from '../../icons/tech-git.svg'

import styles from './styles.module.scss'
import { FadeInUp } from './animations/fadeInUp'

export const MainTechs = () => {
  const willChange = useWillChange()

  return (
    <div className={styles.wrapper}>
      <FadeInUp delay={1}>
        <motion.div
          className={styles.tech}
          title="Next.js"
          transition={{
            duration: 0.2
          }}
          whileHover={{
            y: -12
            // marginRight: 12
          }}
          style={{ willChange }}
        >
          <TechNextjs />
        </motion.div>
      </FadeInUp>

      <FadeInUp delay={1.5}>
        <motion.div
          className={styles.tech}
          title="React.js"
          transition={{
            duration: 0.2
          }}
          whileHover={{
            y: -12
            // marginRight: 12
          }}
          style={{ willChange }}
        >
          <TechReact />
        </motion.div>
      </FadeInUp>

      <FadeInUp delay={2}>
        <motion.div
          className={styles.tech}
          title="TypeScript"
          transition={{
            duration: 0.2
          }}
          whileHover={{
            y: -12
            // marginRight: 12
          }}
          style={{ willChange }}
        >
          <TechTs />
        </motion.div>
      </FadeInUp>

      <FadeInUp delay={2.5}>
        <motion.div
          className={styles.tech}
          title="Node.js"
          transition={{
            duration: 0.2
          }}
          whileHover={{
            y: -12
            // marginRight: 12
          }}
          style={{ willChange }}
        >
          <TechNode />
        </motion.div>
      </FadeInUp>

      <FadeInUp delay={3}>
        <motion.div
          className={styles.tech}
          title="Git"
          transition={{
            duration: 0.2
          }}
          whileHover={{
            y: -12
            // marginRight: 12
          }}
          style={{ willChange }}
        >
          <TechGit />
        </motion.div>
      </FadeInUp>
    </div>
  )
}
