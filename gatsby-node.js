exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  data.allMarkdownRemark.edges.forEach((edge) => {
    const { slug } = edge.node.fields;
    actions.createPage({
      path: slug,
      component: require.resolve('./src/pages/blog.tsx'),
      context: { slug },
    });
  });
};
