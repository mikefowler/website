import * as React from 'react';

import Layout from '../components/Layout';

const NotFoundPage: React.SFC<GatsbyPage> = ({ location }) => (
  <Layout location={location}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn’t exist.</p>
  </Layout>
);

export default NotFoundPage;
