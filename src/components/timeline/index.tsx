import React from 'react'
import { Story } from './story'

import styles from './styles.module.scss'

export const Timeline = () => {
  return (
    <div className={styles.container}>
      <div className={styles.timeline__line}></div>
      <div className={styles.timeline__stories}>
        <Story
          company="Mark Up"
          location="Remoto"
          title="Front-end Developer"
          description="Planejamento, desenvolvimento e implantação de novas funcionalidades no principal software da empresa, além de prestar suporte e mentoria ao time responsável pelo front-end."
          month="Setembro"
          year={2022}
          side="left"
          techs={['React', 'TypeScript', 'Unit Tests']}
        />
        <Story
          company="Arena 22"
          location="Remoto"
          title="Front-end Developer"
          description="Desenvolvimento, documentação e implantação de novas funcionalidade e melhorias na plataforma de apostas esportivas da empresa."
          month="Maio"
          year={2021}
          side="right"
          customWidth={360}
          techs={['Next.js', 'React', 'TypeScript']}
        />
        <Story
          company="Viensoft"
          location="Freelancing"
          title="Full-stack Developer"
          description="Planejamento, desenvolvimento e criação de software sob demanda."
          month="Outubro"
          side="left"
          customWidth={350}
          techs={['Node.js', 'Next.js', 'Unit Tests', 'TypeScript']}
        />
        <Story
          company="Preverteck Tecnologia"
          location="Presencial"
          title="Full-stack Developer"
          description="Planejamento, desenvolvimento e implantação de novas features e melhorias contínuas nos principais softwares e aplicativos da empresa, atuanto no back-end, front-end e mobile."
          month="Fevereiro"
          year={2020}
          side="right"
          customWidth={380}
          techs={['React', 'React Native', 'Node.js', 'Express']}
        />
        <Story
          company="DEBT - Recuperação de crédito"
          location="Remoto"
          title="Jr. Full-stack Developer"
          description="Desenvolvimento e manutenção de softwares internos da empresa, realizando implantações no back-end e front-end, criando e mantendo pequenos sistemas de web scraping."
          month="Julho"
          year={2019}
          side="left"
          customWidth={380}
          techs={['Python', 'React', 'Django']}
        />
        <Story
          company="Pedriali & Vasconcellos Advocacia"
          location="Presencial"
          title="Estagiário"
          description="Suporte e desenvolvimento de sistemas voltados à realizar web scraping, além de participar ativamente de novas definições e melhorias dos sistemas internos da empresa."
          month="Outubro"
          year={2018}
          side="right"
          customWidth={400}
          techs={['Python', 'jQuery', 'Django']}
        />
      </div>
    </div>
  )
}
