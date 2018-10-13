import { Box, Flex, GridBoxProps, GridFlexProps } from '@rebass/grid/emotion';
import * as React from 'react';

const Row: React.SFC<GridFlexProps> = (props) => <Flex {...props} mx={-3} />;

const Column: React.SFC<GridBoxProps> = (props) => <Box {...props} px={3} flex="1 1 auto" />;

export { Row, Column };
