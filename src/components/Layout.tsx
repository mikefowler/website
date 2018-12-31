import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../shared/GlobalStyles';
import theme from '../shared/theme';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';

const LayoutQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;

interface LayoutProps extends GatsbyPage {
  floating?: boolean;
  inverse?: boolean;
  container?: boolean;
}

const Layout: React.SFC<LayoutProps> = ({
  children,
  container = true,
  floating,
  inverse,
  location,
}) => (
  <StaticQuery query={LayoutQuery}>
    {(data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords.join(',') },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <>
            <Header
              location={location}
              siteTitle={data.site.siteMetadata.title}
              inverse={inverse}
              floating={floating}
            />
            {container ? <Container as="main">{children}</Container> : children}
            <Footer />
            <GlobalStyles />
          </>
        </ThemeProvider>
      </>
    )}
  </StaticQuery>
);

export default Layout;
