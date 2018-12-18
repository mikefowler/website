import { graphql as gql } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';

import { DateTime } from 'luxon';
import { Text } from 'rebass';
import { IndexPageQuery as IndexPageQueryInterface } from '../../typings/__generated__/IndexPageQuery';
import { Column, Row } from '../components/Grid';
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
              fluid(maxWidth: 800) {
                ...ImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage: React.SFC<IndexPageProps> = ({ data, location }) => {
  const image = data.images!.edges![0]!.node!;
  const date = DateTime.fromMillis(image!.timestamp! * 1000);

  return (
    <Layout location={location}>
      <Row justifyContent="center" mt={4}>
        <Column width={[1, 3 / 4]} flex="0 1 auto">
          <Img fluid={image.localFile!.childImageSharp!.fluid!} />
          <Text mt={3} fontSize={1} textAlign="center">
            {date.toFormat('MMMM d, y')}
          </Text>
        </Column>
      </Row>
    </Layout>
  );
};

export default IndexPage;
