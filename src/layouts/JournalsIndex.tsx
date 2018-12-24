import { Box } from '@rebass/grid';
import { graphql as gql } from 'gatsby';
import { GatsbyCollectionPaginationLayoutContext } from 'gatsby-plugin-collections';
import idx from 'idx';
import React from 'react';

import {
  JournalsQuery,
  JournalsQuery_journals_edges,
} from '../../typings/__generated__/JournalsQuery';
import JournalEntryPreview from '../components/JournalEntryPreview';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Pagination from '../components/Pagination';

export const query = gql`
  query JournalsQuery($slugs: [String!]!) {
    journals: allMarkdownRemark(
      filter: { fields: { slug: { in: $slugs } } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt

          frontmatter {
            title
          }

          fields {
            slug
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`;

function getJournals(props: JournalsQuery) {
  return idx(props, (_) => _.journals.edges) as JournalsQuery_journals_edges[];
}

interface JournalsIndexProps {
  data: JournalsQuery;
  pageContext: GatsbyCollectionPaginationLayoutContext;
}

const JournalsIndex: React.SFC<JournalsIndexProps> = ({
  data,
  pageContext: { nextPage, previousPage, slugs },
}) => (
  <Layout location={location}>
    <PageHeader title="Journal" subtitle="Notes from the road." />

    {getJournals(data).map(({ node }, index, allJournals) => {
      const isLastItem = index + 1 === allJournals.length;

      return (
        <Box key={node!.id} mb={isLastItem ? 0 : 5}>
          <JournalEntryPreview
            title={node!.frontmatter!.title!}
            date={node!.fields!.date}
            slug={node!.fields!.slug!}
            excerpt={node!.excerpt!}
          />
        </Box>
      );
    })}
    {(!!nextPage || !!previousPage) && (
      <Pagination nextLink={nextPage} previousLink={previousPage} />
    )}
  </Layout>
);

export default JournalsIndex;
