import { Box, Flex } from '@rebass/grid';
import * as React from 'react';
import { Text } from 'rebass';
import Link from './Link';

interface PaginationProps {
  previousLink?: string;
  nextLink?: string;
}

const Pagination: React.SFC<PaginationProps> = ({ previousLink, nextLink }) => (
  <>
    {!!previousLink ? (
      <Link fontSize={1} to={previousLink}>
        Previous
      </Link>
    ) : (
      <Text as="span" fontSize={1}>
        Previous
      </Text>
    )}
    <Text fontSize={1} as="span">
      {' '}
      /{' '}
    </Text>
    {!!nextLink ? (
      <Link fontSize={1} to={nextLink}>
        Next
      </Link>
    ) : (
      <Text as="span" fontSize={1}>
        Next
      </Text>
    )}
  </>
);

export default Pagination;
