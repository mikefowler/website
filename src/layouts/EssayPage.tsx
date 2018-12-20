import { Box, Flex } from '@rebass/grid';
import { graphql as gql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import Link from '../components/Link';
import PageHeader from '../components/PageHeader';
import Pagination from '../components/Pagination';

export const query = gql`
  query EssayPageQuery($ids: [String!]!) {
    essays: allMarkdownRemark(filter: { id: { in: $ids } }) {
      edges {
        node {
          frontmatter {
            title
          }

          fields {
            slug
          }
        }
      }
    }
  }
`;

interface EssaysLayoutProps {
  data: any;
  pageContext: GatsbyCollectionPaginationLayoutContext;
}

const EssaysLayout: React.SFC<EssaysLayoutProps> = ({
  data,
  pageContext: { nextPage, previousPage },
}) => (
  <Layout location={location}>
    <PageHeader title="Writing" subtitle="Essays, fiction, and other longform writing." />
    <Flex justifyContent="center">
      <Box width={[1, 3 / 4, 1 / 2]}>
        <ul>
          {data.essays.edges.map(({ node }: any) => (
            <li key={node.id}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
        {(!!nextPage || !!previousPage) && (
          <Pagination nextLink={nextPage} previousLink={previousPage} />
        )}
      </Box>
    </Flex>
  </Layout>
);

export default EssaysLayout;
