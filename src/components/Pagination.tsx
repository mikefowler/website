import { Box, Flex } from '@rebass/grid';
import * as React from 'react';
import { Text } from 'rebass';
import Link from './Link';

interface PaginationProps {
  previousLink?: string;
  nextLink?: string;
}

const Pagination: React.SFC<PaginationProps> = ({ previousLink, nextLink }) => (
  <Flex justifyContent="center">
    <Box>
      {!!previousLink ? <Link to={previousLink}>Previous</Link> : <Text as="span">Previous</Text>}
    </Box>
    <Text as="span"> / </Text>
    <Box>{!!nextLink ? <Link to={nextLink}>Next</Link> : <Text as="span">Next</Text>}</Box>
  </Flex>
);

export default Pagination;
