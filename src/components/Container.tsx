import * as React from 'react';
import Box from './Box';

interface ContainerProps {
  className?: string;
}

const Container: React.SFC<ContainerProps> = ({ children, className }) => (
  <Box maxWidth={1192} m="0 auto" px="2rem" className={className}>
    {children}
  </Box>
);

export default Container;
