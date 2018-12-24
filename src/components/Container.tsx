import * as React from 'react';
import { Box } from 'rebass';

interface ContainerProps {
  as?: string;
  className?: string;
}

const Container: React.SFC<ContainerProps> = ({ as, children, className }) => (
  <Box as={as} m="0 auto" px="2rem" className={className} css={{ maxWidth: 1192 }}>
    {children}
  </Box>
);

export default Container;
