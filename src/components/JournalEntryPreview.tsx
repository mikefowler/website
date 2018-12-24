import { Box, Flex } from '@rebass/grid';
import * as React from 'react';
import { Heading, Text } from 'rebass';

import Link from './Link';

export interface JournalEntryPreviewProps {
  date?: string;
  title: string;
  excerpt: string;
  slug: string;
}

const JournalEntryPreview: React.SFC<JournalEntryPreviewProps> = ({
  date,
  excerpt,
  slug,
  title,
}) => (
  <Box as="article" my={4}>
    <Box mb={2}>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        <Box width={[1, 3 / 4, 3 / 4]}>
          <Heading fontSize={2}>
            <Link to={slug}>{title}</Link>
          </Heading>
        </Box>
        <Box width={[1, 3 / 4, 1 / 4]} order={['unset', 'unset', -1]}>
          <Text mr={5} textAlign={[null, null, 'right']} fontSize={1}>
            {date}
          </Text>
        </Box>
      </Flex>
    </Box>
    <Flex justifyContent="center">
      <Box width={[1, 3 / 4, 1 / 2]}>
        <Text mb={2}>{excerpt}</Text>
        <Link fontSize={1} to={slug}>
          Continue reading…
        </Link>
      </Box>
    </Flex>
  </Box>
);

export default JournalEntryPreview;
