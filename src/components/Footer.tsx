import React from 'react';
import { Text } from 'rebass';

import Bar from './Bar';
import Container from './Container';

const Footer: React.SFC = () => (
  <footer>
    <Container>
      <Text fontSize={1} mb={4} textAlign="center">
        <Bar inline width={50} mt={4} mb={4} />
        <Text>© Copyright 2010–2018, Mike Fowler</Text>
      </Text>
    </Container>
  </footer>
);

export default Footer;
