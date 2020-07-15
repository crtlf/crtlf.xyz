import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const Layout = ({children}) => (
    <StaticQuery
        query = {graphql`
            query Metadata {
                site {
                    siteMetadata {
                        title,
                        description,
                        url
                    }
                }
            }
        `}
        render = {data => (
            <div style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Helmet>
                  <meta charSet="utf-8" />
                  <title>{data.site.siteMetadata.title}</title>
                  <meta name="description" content={data.site.siteMetadata.description} />
                  <link rel="canonical" href={data.site.siteMetadata.url} />
                </Helmet>
                {children}
            </div>
        )}
    />
)

export default Layout;
