import { ThemeProvider } from 'emotion-theming';
import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';

import theme from '../shared/theme';
import Container from './Container';
import Header from './Header';
import './layout.css';

const QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;

const Layout: React.SFC = ({ children }) => (
  <StaticQuery query={QUERY}>
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
            <Header siteTitle={data.site.siteMetadata.title} />
            <Container>{children}</Container>
          </>
        </ThemeProvider>
      </>
    )}
  </StaticQuery>
);

export default Layout;
