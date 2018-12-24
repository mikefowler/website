import { Box, Flex } from '@rebass/grid';
import { graphql as gql } from 'gatsby';
import idx from 'idx';
import * as React from 'react';
import { Heading } from 'rebass';

import { EssayTemplateQuery } from '../../typings/__generated__/EssayTemplateQuery';
import Formatted from '../components/Formatted';
import Layout from '../components/Layout';
import Link from '../components/Link';

export const query = gql`
  query EssayTemplateQuery($slug: String!) {
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

      fields {
        slug
      }
    }
  }
`;

function getPost(props: EssayTemplateQuery) {
  return idx(props, (_) => _.markdownRemark);
}

function getTitle(props: EssayTemplateQuery) {
  return idx(props, (_) => _.markdownRemark.frontmatter.title) as string;
}

function getSlug(props: EssayTemplateQuery) {
  return idx(props, (_) => _.markdownRemark.fields.slug) as string;
}

export interface EssayTemplateProps extends GatsbyPage {
  data?: any;
}

const EssayTemplate: React.SFC<EssayTemplateProps> = ({ data, location }) => {
  const post = getPost(data);
  const title = getTitle(data);
  const slug = getSlug(data);

  return (
    <Layout location={location}>
      <Box mt={6} mb={4}>
        <Flex justifyContent="center">
          <Box width={[1, 3 / 4, 1 / 2]}>
            <Heading lineHeight={1.2}>
              <Link to={slug}>{title}</Link>
            </Heading>
          </Box>
        </Flex>
        <Flex justifyContent="center">
          <Box width={[1, 3 / 4, 1 / 2]} mt={4}>
            <Formatted>
              <div dangerouslySetInnerHTML={{ __html: post!.html }} />
            </Formatted>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default EssayTemplate;
