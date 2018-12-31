import { Box, Flex } from '@rebass/grid';
import { graphql as gql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import * as React from 'react';

import idx from 'idx';
import { DateTime } from 'luxon';
import { Text } from 'rebass';
import { IndexPageQuery as IndexPageQueryInterface } from '../../typings/__generated__/IndexPageQuery';
import Layout from '../components/Layout';

export interface IndexPageProps extends GatsbyPage {
  data: IndexPageQueryInterface;
}

export const query = gql`
  query IndexPageQuery {
    images: allInstaNode(limit: 1) {
      edges {
        node {
          timestamp
          localFile {
            childImageSharp {
              fluid(maxHeight: 600, maxWidth: 600) {
                ...ImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

function getImageMeta(props: IndexPageQueryInterface) {
  return idx(props, (_) => _.images.edges[0].node.localFile.childImageSharp.fluid) as FluidObject;
}

function getTimestamp(props: IndexPageQueryInterface) {
  return idx(props, (_) => _.images.edges[0].node.timestamp) as number;
}

const IndexPage: React.SFC<IndexPageProps> = ({ data, location }) => {
  const date = DateTime.fromMillis(getTimestamp(data) * 1000);

  return (
    <Layout container={false} location={location}>
      <Flex justifyContent="center" mt={4}>
        <Box width={[1, 2 / 3, 1 / 2]} css={{ maxWidth: 550 }} flex="0 1 auto">
          <Img fluid={getImageMeta(data)} />
          <Text fontSize={1} mt={3} textAlign="center">
            {date.toFormat('MMMM d, y')}
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
