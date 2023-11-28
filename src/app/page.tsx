import React from 'react'
import Image from 'next/image'

import { FiLinkedin, FiMail, FiGithub } from 'react-icons/fi'

import styles from './styles.module.scss'
import { PointerPos } from '../components/pointer-pos'

const SOCIAL = {
  LINKEDIN: 'https://www.linkedin.com/in/victorhugocepil/',
  MAIL: 'mailto:victor@cepil.dev',
  GITHUB: 'https://github.com/Viiict0r'
}

export default function Page() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__effect} />
        <div className={styles.card_header}>
          <div className={styles.card_header__dot} />
          <div className={styles.card_header__dot} />
          <div className={styles.card_header__dot} />
        </div>
        <div className={styles.card_body}>
          <div className={styles.card_body__name_and_photo}>
            <Image
              src="/assets/photo.png"
              alt="Victor Hugo"
              width={100}
              height={100}
            />
            <div className={styles.card_body__name_and_photo__name}>
              <h3>Victor Hugo Cépil</h3>
              <span>DESENVOLVEDOR FRONT-END</span>
            </div>
          </div>
          <div className={styles.card_body__about}>
            <p>
              Com 23 anos de idade e pouco mais de <span>5 anos</span> de
              experiência profissional como desenvolvedor, já atuei em diversos
              projetos de software que me fizeram aperfeiçoar minhas habilidades
              com desenvolvimento web.
            </p>
            <p>
              Iniciei minha jornada profissional como full-stack, atuando em
              projetos de Web Scraping utilizando Python, HTML, CSS & jQuery.
              Porém ao decorrer dos anos, direcionei minha carreira para o mundo
              front-end, e hoje trabalho com todo ecossistema React.
            </p>
          </div>
          <div className={styles.card_body__social}>
            <a href={SOCIAL.LINKEDIN} target="_blank" rel="noreferrer">
              <div className={styles.card_body__social_item}>
                <FiLinkedin size={18} />
              </div>
            </a>
            <a href={SOCIAL.MAIL}>
              <div className={styles.card_body__social_item}>
                <FiMail size={18} />
              </div>
            </a>
            <a href={SOCIAL.GITHUB} target="_blank" rel="noreferrer">
              <div className={styles.card_body__social_item}>
                <FiGithub size={18} />
              </div>
            </a>
          </div>
        </div>
      </div>

      <PointerPos />
    </main>
  )
}
