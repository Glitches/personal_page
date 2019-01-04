module.exports = {
  plugins: [
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
