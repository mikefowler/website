module.exports = {
  siteMetadata: {
    title: 'Mike Fowler',
    description: '',
    keywords: ['foo', 'bar'],
    author: {
      name: 'Mike Fowler',
      email: 'mike@mikefowler.me',
    },
    header: {
      navlinks: [
        {
          text: 'Writing',
          url: '/writing',
        },
        {
          text: 'Journal',
          url: '/journal',
        },
        {
          text: 'Audio',
          url: '/an-irrevocable-condition',
        },
        {
          text: 'About',
          url: '/about',
        },
      ],
    },
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-extract-schema',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Mike Fowler',
        short_name: 'Mike Fowler',
        start_url: '/',
        background_color: '#7b68ee',
        theme_color: '#7b68ee',
        display: 'minimal-ui',
        icon: 'src/images/icons/favicon-192x192.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
  ],
};
