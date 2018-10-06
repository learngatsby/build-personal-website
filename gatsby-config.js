const pathPrefix = '/gatsby-course';

module.exports = {
  pathPrefix,
  siteMetadata: {
    title: 'Luan Orlandi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Luan Orlandi',
        short_name: 'Luan Orlandi',
        start_url:
          process.env.NODE_ENV === 'production' ? `${pathPrefix}/` : '/',
        background_color: '#202021',
        theme_color: '#303030',
        display: 'minimal-ui',
        icon: 'src/assets/meta/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_GATSBY_COURSE,
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
