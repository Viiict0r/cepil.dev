import React from 'react'
import Image from 'next/image'

import { FiLinkedin, FiMail, FiGithub, FiInstagram } from 'react-icons/fi'

import styles from '../styles/Home/Home.module.scss'
import { MainTechs } from '../components/main-techs'

export default function Page() {
  return (
    <main>
      <section className={`${styles.container} ${styles.bio__container}`}>
        <header>
          <div className={styles.social}>
            <FiLinkedin size={20} />
            <FiMail size={20} />
            <FiGithub size={20} />
            <FiInstagram size={20} />
          </div>
        </header>

        <div className={styles.bio__block}>
          <figure>
            <Image
              src="/assets/photo.png"
              alt="Victor Hugo Cépil"
              layout="fill"
            />
          </figure>
          <div className={styles.bio__block_about}>
            <h1>Victor Hugo Cépil</h1>
            <small>
              FRONT-END DEVELOPER AT <span>@Mark Up</span>
            </small>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout, fact
              that a reader will be distracted by the readable.
            </p>

            <div className={styles.bio__block_about_techs}>
              <small>MAIN TECHNOLOGIES</small>
              <div>
                <MainTechs />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.timeline__container}`}>
        <div className={styles.container}>
          <h1>TIMELINE</h1>
        </div>
      </section>

      <footer>footer</footer>
    </main>
  )
}
