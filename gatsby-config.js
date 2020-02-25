module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/pages', 'static/fonts'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
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
