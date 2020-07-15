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
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                google: {
                    families: [
                        'Exo 2:600,700',
                        'Roboto Slab:400,700',
                    ],
                },
            },
        }
    ]
}
