module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
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
