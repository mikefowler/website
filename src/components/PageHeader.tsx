import { Box, Flex } from '@rebass/grid/emotion';
import * as React from 'react';
import { Heading, Text } from 'rebass/emotion';

import Bar from './Bar';

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.SFC<PageHeaderProps> = ({ title, subtitle }) => (
  <Box mt={6} mb={4}>
    <Flex justifyContent="center">
      <Box width={[1, 1 / 2]}>
        <Heading fontSize={5}>{title}</Heading>
        {subtitle && <Text fontSize={1}>{subtitle}</Text>}
        <Bar width={50} mt={3} />
      </Box>
    </Flex>
  </Box>
);

export default PageHeader;
