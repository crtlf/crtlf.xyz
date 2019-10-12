/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Exo 2`,
                        subsets: [`latin`],
                        variants: [`600`, `700`]
                    },
                    {
                        family: `Roboto Slab`,
                        subsets: [`latin`],
                        variants: [`400`, `700`]
                    },
                ],
            },
        }
    ]
}
