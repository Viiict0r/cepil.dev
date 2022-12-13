import React from 'react'

import { FiLinkedin, FiMail, FiGithub, FiInstagram } from 'react-icons/fi'

import styles from '../styles/Home/Home.module.scss'
import { MainTechs } from '../components/main-techs'
import { Picture } from '../components/picture'
import { Timeline } from '../components/timeline'
import { FadeInUp } from '../components/animations/fadeInUp'

import { bio } from '../utils/bio'
import { Arrow, BackToTop } from '../components/arrow'

const social = {
  LINKEDIN: 'https://www.linkedin.com/in/victorhugocepil/',
  MAIL: 'mailto:victorh.cepil@hotmail.com',
  GITHUB: 'https://github.com/Viiict0r',
  INSTAGRAM: 'https://instagram.com/victorh.cepil'
}

export default function Page() {
  return (
    <main>
      <section className={`${styles.container} ${styles.bio__container}`}>
        <header>
          <div className={styles.social}>
            <a href={social.LINKEDIN} target="_blank" rel="noreferrer">
              <FiLinkedin size={20} />
            </a>
            <a href={social.MAIL} target="_blank" rel="noreferrer">
              <FiMail size={20} />
            </a>
            <a href={social.GITHUB} target="_blank" rel="noreferrer">
              <FiGithub size={20} />
            </a>
            <a href={social.INSTAGRAM} target="_blank" rel="noreferrer">
              <FiInstagram size={20} />
            </a>
          </div>
        </header>

        <div className={styles.bio__block}>
          <Picture />
          <div className={styles.bio__block_about}>
            <FadeInUp duration={0.4}>
              <h1>Victor Hugo Cépil</h1>
            </FadeInUp>
            <FadeInUp duration={0.4} delay={0.1}>
              <small>FRONT-END DEVELOPER</small>
            </FadeInUp>
            <FadeInUp duration={0.4} delay={0.3}>
              <p>{bio}</p>
            </FadeInUp>

            <div className={styles.bio__block_about_techs}>
              <FadeInUp duration={0.4} delay={0.5}>
                <small>MAIN TECHNOLOGIES</small>
              </FadeInUp>
              <div>
                <MainTechs />
              </div>
            </div>
          </div>
        </div>

        <Arrow />
      </section>

      <section className={`${styles.timeline__container}`}>
        <div className={styles.container}>
          <h1>TIMELINE</h1>
          <p className={styles.desc}>
            Empresas e posições por onde passei ao longo dos anos
          </p>
          <Timeline />
        </div>

        <BackToTop />
      </section>

      <footer className={styles.footer}>
        <div className={styles.citation}>
          <i>&quot;Keep it simple, stupid!&quot;</i>
          <FadeInUp duration={0.5} inViewOnly>
            <span>- Clarence Johnson</span>
          </FadeInUp>
        </div>
        <div className={styles.footer__social}>
          <a href={social.LINKEDIN} target="_blank" rel="noreferrer">
            <FiLinkedin size={20} />
          </a>
          <a href={social.MAIL} target="_blank" rel="noreferrer">
            <FiMail size={20} />
          </a>
          <a href={social.GITHUB} target="_blank" rel="noreferrer">
            <FiGithub size={20} />
          </a>
          <a href={social.INSTAGRAM} target="_blank" rel="noreferrer">
            <FiInstagram size={20} />
          </a>
        </div>
      </footer>
    </main>
  )
}
