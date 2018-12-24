import { Box, Flex } from '@rebass/grid';
import { graphql as gql } from 'gatsby';
import { GatsbyCollectionPaginationLayoutContext } from 'gatsby-plugin-collections';
import idx from 'idx';
import React from 'react';

import { EssaysQuery, EssaysQuery_essays_edges } from '../../typings/__generated__/EssaysQuery';
import Layout from '../components/Layout';
import Link from '../components/Link';
import PageHeader from '../components/PageHeader';
import Pagination from '../components/Pagination';

export const query = gql`
  query EssaysQuery($slugs: [String!]!) {
    essays: allMarkdownRemark(
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

function getEssays(props: EssaysQuery) {
  return idx(props, (_) => _.essays.edges) as EssaysQuery_essays_edges[];
}

interface EssaysIndexProps {
  data: EssaysQuery;
  pageContext: GatsbyCollectionPaginationLayoutContext;
}

const EssaysIndex: React.SFC<EssaysIndexProps> = ({
  data,
  pageContext: { nextPage, previousPage },
}) => (
  <Layout location={location}>
    <PageHeader title="Writing" subtitle="Essays, fiction, and other longform writing." />
    <Flex justifyContent="center">
      <Box width={[1, 3 / 4, 1 / 2]}>
        <ul>
          {getEssays(data).map(({ node }) => (
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

export default EssaysIndex;
