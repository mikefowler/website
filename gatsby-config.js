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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/essays`,
        name: 'essays',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/code`,
        name: 'code',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/journal`,
        name: 'journal',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/podcasts`,
        name: 'podcasts',
      },
    },
    {
      resolve: `gatsby-plugin-collections`,
      options: {
        permalink: ':collection/:title',
        collections: [
          {
            name: 'writing',
            path: `src/essays`,
            layout: 'Essay',
            paginate: {
              perPage: 10,
              layout: 'EssaysIndex',
            },
          },
          {
            name: 'code',
            path: `${__dirname}/src/code`,
            permalink: 'pretty',
            paginate: {
              perPage: 10,
              layout: 'CodesIndex',
            },
          },
          {
            name: 'journal',
            path: `${__dirname}/src/journal`,
            permalink: 'pretty',
            paginate: {
              perPage: 10,
              layout: 'JournalsIndex',
            },
          },
          {
            name: 'podcasts',
            path: `${__dirname}/src/podcasts`,
            output: false,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'michaelrfowler',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-unwrap-images',
          'gatsby-remark-external-links',
          'gatsby-remark-embed-gist',
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
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
  ],
};
