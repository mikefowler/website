import { Box, Flex } from '@rebass/grid';
import { graphql as gql } from 'gatsby';
import * as React from 'react';
import { Heading, Text } from 'rebass';

import { CodeTemplateQuery } from '../../typings/__generated__/CodeTemplateQuery';
import Container from '../components/Container';
import Formatted from '../components/Formatted';
import Layout from '../components/Layout';

export const query = gql`
  query CodeTemplateQuery($slug: String!) {
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

export interface CodeTemplateProps extends GatsbyPage {
  data?: CodeTemplateQuery;
}

const CodeTemplate: React.SFC<CodeTemplateProps> = ({ data, location }) => {
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

export default CodeTemplate;
