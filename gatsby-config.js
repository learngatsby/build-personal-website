module.exports = {
  siteMetadata: {
    title: 'Luan Orlandi',
    author: '@luanorlandi',
    siteUrl: 'https://luanorlandi.github.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
};
