import React from "react"
import Socials from "./socials.js"
import heroStyles from "../styles/hero.module.css"

const HeroComponent = () => (
    <div className={heroStyles.hero}>
        <h1>Hello <span role="img" aria-label="Wave">👋</span></h1>
        <p>I’m Corentin Le Fur — <b>crtlf</b></p>
        <p>Currently working at <a href="https://yellowcake.net" target="_blank" rel="noopener noreferrer">Yellowcake <span role="img" aria-label="French flag">🇫🇷</span></a> as a <b>front end developer</b></p>
        <p>And also a freelancer, so feel free to contact me</p>
        <Socials />
    </div>
)

export default HeroComponent
