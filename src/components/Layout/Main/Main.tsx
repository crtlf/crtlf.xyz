import * as React from 'react'
import * as styles from './main.module.scss'

interface MainProps {
  children: React.ReactNode
}

const Main = ({children}: MainProps) => {
  return (
    <main className={styles.main} id="#top">
      { children }
    </main>
  )
}

export default Main
