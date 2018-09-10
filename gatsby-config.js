module.exports = {
  siteMetadata: {
    title: 'Foobar',
    description: '',
    keywords: ['foo', 'bar'],
    author: {
      name: 'Mike Fowler',
      email: 'mike@mikefowler.me',
    },
  },
  plugins: [
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
