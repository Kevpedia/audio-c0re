module.exports = {
  siteMetadata: {
    title: 'AudioC0RE',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'tQ9ua8F7bSvtT-rSe3ousPBFFC-MsYmDHlMWTdt-mdE',
        spaceId: '6w7ipsusex2z',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
