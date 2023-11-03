import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/Header"
import ProjectList from "../components/ProjectList"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header/>
      <ProjectList/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
