import * as React from 'react'

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        @2023 — Corentin Le Fur
      </div>
      <ul>
        <li>
          <a href="https://twitter.com/CorentinLf" target="_blank" rel="noopener noreferrer">Twitter / X</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/crtlf" target="_blank" rel="noopener noreferrer">Linkedin</a>
        </li>
        <li>
          <a href="https://www.malt.fr/profile/corentinlefur" target="_blank" rel="noopener noreferrer">Malt</a>
        </li>
      </ul>
      <a href="#top" className='back-to-top'>
        <span>Retour en haut</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
        </svg>
      </a>
    </footer>
  )
}

export default Footer
