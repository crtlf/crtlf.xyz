import React from "react"
import heroStyles from "./hero.module.css"

export default () => (
    <div className={heroStyles.hero}>
        <h1>Hello <span role="img" aria-label="Wave">👋</span></h1>
        <p>I’m Corentin Le Fur — <b>crtlf</b></p>
        <p>Currently working at <a href="https://yellowcake.net" target="_blank" rel="noopener noreferrer">Yellowcake <span role="img" aria-label="French flag">🇫🇷</span></a> as a <b>front end developer</b></p>
        <p>And also a freelancer, so feel free to contact me</p>
        <p>I'm on <a href="https://twitter.com/CorentinLf" target="_blank" rel="noopener noreferrer">Twitter</a>, <a href="https://www.instagram.com/crtlf/" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="http://github.com/crtlf" target="_blank" rel="noopener noreferrer">Github</a>, <a href="https://stackoverflow.com/users/7160865/crtlf" target="_blank" rel="noopener noreferrer">Stackoverflow</a> and <a href="https://www.linkedin.com/in/crtlf/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
    </div>
)
