/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: "Corentin Le Fur - Front end developer",
        description: "Corentin Le Fur — crtlf — front end developer working at Yellowcake, France.",
        url: "https://crtlf.xyz",
        socials: [
            {
                name: 'Twitter',
                url: 'https://twitter.com/CorentinLf'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/crtlf'
            },
            {
                name: 'Github',
                url: 'http://github.com/crtlf'
            },
            {
                name: 'Stackoverflow',
                url: 'https://stackoverflow.com/users/7160865/crtlf'
            },
            {
                name: 'Linkedin',
                url: 'https://www.linkedin.com/in/crtlf'
            }
        ]
    },
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
