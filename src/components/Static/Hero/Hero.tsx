import * as React from 'react'
import * as styles from "./hero.module.scss"

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1>
        <small data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="500">Corentin Le Fur</small>
        <span data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease" data-sal-duration="500">Développeur web <em>freelance</em></span>
      </h1>

      <a href="#contact" className={styles.disponibility} data-sal="slide-up" data-sal-delay="700" data-sal-easing="ease" data-sal-duration="500">
        <span className={styles.indicator}></span>
        Disponible pour de nouvelles opportunités
      </a>

      <p className={styles.intro} data-sal="slide-up" data-sal-delay="900" data-sal-easing="ease" data-sal-duration="500">
        Avec plus de 10 ans d'expérience, je suis votre partenaire de confiance pour le développement de sites web, le référencement et la maintenance, transformant vos idées en solutions numériques.
      </p>

      <a href="#projects" aria-label="Voir les projets" className={styles.scrolldown} data-sal="slide-up" data-sal-delay="1100" data-sal-easing="ease" data-sal-duration="500">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
        </svg>
      </a>
    </section>
  )
}

export default Hero
