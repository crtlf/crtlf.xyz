import * as React from 'react'

const Header: React.FC = () => {
  return (
    <header className='header'>
      <h1>
        <small>Corentin Le Fur</small>
        <span>Développeur web <em>freelance</em></span>
      </h1>

      <div className='disponibility'>
        <span className='disponibility__indicator'></span>
        Disponible pour de nouvelles opportunités
      </div>

      <p className='header__intro'>Avec plus de 10 ans d'expérience, je suis votre partenaire de confiance pour le développement de sites web, le référencement et la maintenance, transformant vos idées en solutions numériques.</p>

      <div className="scroll-down">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
        </svg>
      </div>
    </header>
  )
}

export default Header
