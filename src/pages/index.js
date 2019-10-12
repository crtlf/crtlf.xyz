import React from "react"
import Hero from "../components/hero"
import Footer from "../components/footer"

export default () => (
    <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: "column"
    }}>
        <Hero />
        <Footer />
    </div>
)
