import { Box, Flex, GridBoxProps, GridFlexProps } from '@rebass/grid';
import * as React from 'react';

const Row: React.SFC<GridFlexProps> = (props) => <Flex mx={-3} {...props} />;

const Column: React.SFC<GridBoxProps> = (props) => <Box px={3} flex="1 1 auto" {...props} />;

export { Row, Column };
