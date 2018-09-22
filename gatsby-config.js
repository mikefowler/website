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
    'gatsby-plugin-extract-schema',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
  ],
};
