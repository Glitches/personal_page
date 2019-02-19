module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'SWAPI',
        // This is field under which it's accessible
        fieldName: 'swapi',
        // Url to query from
        url: 'https://api.graphcms.com/simple/v1/swapi',
      },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        theme: {
          primaryColor: '#9c27b0',
        },
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-postcss',
      options: [
        {
          test: /\.css$/,
          include: /reflexy/,
        },
      ],
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-eslint',
      options: [
        {
          test: /\.js$|\.jsx$/,
          exclude: /(node_modules|cache|public)/,
          options: {
            emitWarning: true,
            failOnError: false,
          },
        },
        {
          test: /\.ts$|\.tsx$/,
          exclude: /(node_modules|cache|public)/,
          options: {
            emitWarning: true,
            failOnError: false,
          },
        },
      ],
    },
  ],
};
