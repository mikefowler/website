import { graphql as gql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import idx from 'idx';
import * as React from 'react';

import {
  AboutPageQuery as AboutPageQueryInterface,
  AboutPageQuery_image_childImageSharp_fluid,
} from '../../typings/__generated__/AboutPageQuery';
import { Column, Row } from '../components/Grid';
import Layout from '../components/Layout';
import Link from '../components/Link';
import PageHeader from '../components/PageHeader';

export interface AboutPageProps extends GatsbyPage {
  data: AboutPageQueryInterface;
}

export const query = gql`
  query AboutPageQuery {
    site {
      siteMetadata {
        author {
          email
        }
      }
    }

    image: file(relativePath: { regex: "/mike.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...ImageFluid
        }
      }
    }
  }
`;

function getImage(props: AboutPageQueryInterface) {
  return idx(props, (_) => _.image.childImageSharp.fluid) as FluidObject;
}

function getEmail(props: AboutPageQueryInterface) {
  return idx(props, (_) => _.site.siteMetadata.author.email) as string;
}

const AboutPage: React.SFC<AboutPageProps> = ({ data, location }) => (
  <Layout location={location}>
    <PageHeader title="About" subtitle="Biography and contact information" />
    <Row flexWrap="wrap">
      <Column width={[1, 1 / 2]}>
        <p>I’m Mike Fowler, a writer and software engineer. I live in Brooklyn.</p>
        <p>
          I help put on <Link to="https://campwonderful.com">Camp Wonderful</Link>, a summer camp
          for grown-ups.
        </p>
        <p>
          I work at <Link to="https://airbnb.com">Airbnb</Link>, where I build products for our
          internal community; previously, I helped conceptualize and build{' '}
          <Link to="https://www.airbnb.com/experiences">Airbnb Experiences</Link>.
        </p>
        <p>
          You can get in touch with me <Link to={`mailto:${getEmail(data)}`}>via email</Link>.
        </p>
      </Column>
      <Column width={[1, 1 / 2]} mb={4} order={[-1, 'unset']}>
        <Img fluid={getImage(data)} />
      </Column>
    </Row>
  </Layout>
);

export default AboutPage;
