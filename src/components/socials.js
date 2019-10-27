import React from "react"
import { StaticQuery, graphql } from "gatsby"
import socialsStyles from "../styles/socials.module.css"

const Socials = () => (
    <StaticQuery
        query = {graphql`
            query HeroComponent {
                site {
                    siteMetadata {
                        socials {
                            name
                            url
                        }
                    }
                }
            }
        `}
        render = {data => (
            <div className={socialsStyles.socials}>
                <p>I'm on</p>
                <ul>
                    { data.site.siteMetadata.socials.map((social, index) => {
                        return (<li key={index}>
                            <a href={social.url} target="_blank" rel="noopener noreferrer">{social.name}</a>
                        </li>)
                    })}
                </ul>
            </div>
        )}
    />
)

export default Socials
