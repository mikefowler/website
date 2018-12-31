import { Box, Flex } from '@rebass/grid';
import * as React from 'react';
import { Text } from 'rebass';

import HeaderLinkContainer from './HeaderLinkContainer';
import HeaderLinkText from './HeaderLinkText';
import HeaderLinkUnderline from './HeaderLinkUnderline';

export interface HeaderLinkProps {
  location: Location;
  text: string;
  to: string;
  inverse?: boolean;
}

const HeaderLink: React.SFC<HeaderLinkProps> = ({ inverse, location, to, text }) => {
  const isCurrent = location && location.pathname === to;
  const isPartiallyCurrent = location && location.pathname.startsWith(to);

  return (
    <HeaderLinkContainer
      to={to}
      isInverse={inverse}
      isActive={isCurrent || isPartiallyCurrent ? true : undefined}
      isDisabled={isCurrent}
    >
      <Flex flexDirection="column" justifyContent="center">
        <Box py={[0, 4]}>
          <Text fontSize={1} textAlign="center">
            <HeaderLinkText fontFamily="serif">
              {text}
              <HeaderLinkUnderline active={isCurrent || isPartiallyCurrent} />
            </HeaderLinkText>
          </Text>
        </Box>
      </Flex>
    </HeaderLinkContainer>
  );
};

export default HeaderLink;
