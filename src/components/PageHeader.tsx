import { Box, Flex } from '@rebass/grid';
import * as React from 'react';
import { Heading, Text } from 'rebass';

import Bar from './Bar';

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.SFC<PageHeaderProps> = ({ title, subtitle }) => (
  <Box mt={6} mb={4}>
    <Flex justifyContent="center">
      <Box width={[1, 3 / 4, 1 / 2]}>
        <Heading as="h2" lineHeight={1.2}>
          {title}
        </Heading>
        {subtitle && <Text fontSize={1}>{subtitle}</Text>}
        <Bar width={50} mt={3} />
      </Box>
    </Flex>
  </Box>
);

export default PageHeader;
