import React from 'react'

import TechNextjs from '../../icons/tech-nextjs.svg'
import TechReact from '../../icons/tech-reactjs.svg'
import TechTs from '../../icons/tech-typescript.svg'
import TechNode from '../../icons/tech-nodejs.svg'
import TechGit from '../../icons/tech-git.svg'

import styles from './styles.module.scss'

export const MainTechs = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tech}>
        <TechNextjs />
      </div>
      <div className={styles.tech}>
        <TechReact />
      </div>
      <div className={styles.tech}>
        <TechTs />
      </div>
      <div className={styles.tech}>
        <TechNode />
      </div>
      <div className={styles.tech}>
        <TechGit />
      </div>
    </div>
  )
}
