import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/Header"
import ProjectList from "../components/ProjectList"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main id="top">
      <Header/>
      <ProjectList/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <html lang="fr" />
    <title>Corentin Le Fur — Développeur web freelance à Brest</title>
    <meta name="description" content="Avec plus de 10 ans d'expérience, je suis votre partenaire de confiance pour le développement de sites web, le référencement et la maintenance, transformant vos idées en solutions numériques." />
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌️</text></svg>" />
  </>
)
