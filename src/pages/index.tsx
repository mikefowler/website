import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';

import Layout from '../components/Layout';

interface StaticQueryData {
  site: {
    siteMetadata: {
      title: string;
      author: {
        name: string;
      };
    };
  };
}

const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
  }
`;

const IndexPage: React.SFC = () => (
  <StaticQuery query={query}>
    {(data: StaticQueryData) => (
      <Layout>
        <h1>Hello, {data.site.siteMetadata.author.name}!</h1>
      </Layout>
    )}
  </StaticQuery>
);

export default IndexPage;
