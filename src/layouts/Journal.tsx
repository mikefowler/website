import { Box, Flex } from '@rebass/grid';
import { graphql as gql } from 'gatsby';
import * as React from 'react';
import { Heading, Text } from 'rebass';

import { JournalTemplateQuery } from '../../typings/__generated__/JournalTemplateQuery';
import Container from '../components/Container';
import Formatted from '../components/Formatted';
import Layout from '../components/Layout';

export const query = gql`
  query JournalTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          email
        }
      }
    }

    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`;

export interface JournalTemplateProps extends GatsbyPage {
  data?: JournalTemplateQuery;
}

const JournalTemplate: React.SFC<JournalTemplateProps> = ({ data, location }) => {
  const post = data!.markdownRemark;
  const title = post!.frontmatter!.title;

  return (
    <Layout location={location}>
      <Container>
        <Box mt={6}>
          <Box mb={4}>
            <Flex justifyContent="center">
              <Box width={[1 / 2]}>
                <Heading lineHeight={1.2}>{title}</Heading>
              </Box>
            </Flex>
          </Box>
          <Formatted>
            <div dangerouslySetInnerHTML={{ __html: post!.html! }} />
          </Formatted>
        </Box>
      </Container>
    </Layout>
  );
};

export default JournalTemplate;
