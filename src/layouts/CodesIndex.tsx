import { Box, Flex } from '@rebass/grid';
import { graphql as gql } from 'gatsby';
import { GatsbyCollectionPaginationLayoutContext } from 'gatsby-plugin-collections';
import idx from 'idx';
import React from 'react';

import { CodesQuery, CodesQuery_codes_edges } from '../../typings/__generated__/CodesQuery';
import Layout from '../components/Layout';
import Link from '../components/Link';
import PageHeader from '../components/PageHeader';
import Pagination from '../components/Pagination';

export const query = gql`
  query CodesQuery($slugs: [String!]!) {
    codes: allMarkdownRemark(
      filter: { fields: { slug: { in: $slugs } } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          id

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

function getCodes(props: CodesQuery) {
  return idx(props, (_) => _.codes.edges) as CodesQuery_codes_edges[];
}

interface CodesIndexProps {
  data: CodesQuery;
  pageContext: GatsbyCollectionPaginationLayoutContext;
}

const CodesIndex: React.SFC<CodesIndexProps> = ({
  data,
  pageContext: { nextPage, previousPage },
}) => (
  <Layout location={location}>
    <PageHeader title="Code" subtitle="Tutorials and guides." />
    <Flex justifyContent="center">
      <Box width={[1, 3 / 4, 1 / 2]}>
        <ul>
          {getCodes(data).map(({ node }) => (
            <li key={node!.id!}>
              <Link to={node!.fields!.slug!}>{node!.frontmatter!.title}</Link>
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

export default CodesIndex;
