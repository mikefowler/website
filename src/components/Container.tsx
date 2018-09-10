import * as React from 'react';
import styled from 'react-emotion';

import Box from './Box';

interface ContainerProps {
  className?: string;
}

const Container: React.SFC<ContainerProps> = ({ children, className }) => (
  <Box width={[1, 960]} m="0 auto" py={2} className={className}>
    {children}
  </Box>
);

export default Container;
