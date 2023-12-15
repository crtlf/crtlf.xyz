import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/Header"
import ProjectList from "../components/ProjectList"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header/>
      <ProjectList/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
