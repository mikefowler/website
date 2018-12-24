import { Box, Flex } from '@rebass/grid';
import * as React from 'react';
import { Text } from 'rebass';

import styled from '../shared/styled';
import Link from './Link';

export interface HeaderLinkProps {
  location: Location;
  text: string;
  to: string;
}

export interface LinkContainerProps {
  isCurrent?: boolean;
  isPartiallyCurrent?: boolean;
}

export interface LinkUnderlineProps {
  active?: boolean;
}

const LinkText = styled(Text)`
  display: inline-block;
  position: relative;
`;

const LinkUnderline = styled.div<LinkUnderlineProps>`
  background: ${(props) => props.theme.colors.gray3};
  bottom: -0.5rem;
  height: 2px;
  left: 25%;
  opacity: 0;
  position: absolute;
  transform: translateY(5px);
  transition-duration: 0.2s;
  transition-property: transform, opacity;
  transition-timing-function: ${(props) => props.theme.easings.snap};
  width: 50%;
`;

const LinkContainer = styled(Link)<LinkContainerProps>`
  box-shadow: none;
  color: ${(p) => (p.isCurrent || p.isPartiallyCurrent ? p.theme.colors.primary : '')};
  cursor: ${(p) => (p.isCurrent ? 'default' : '')};
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition-property: color;
  transition-duration: 0.2s;
  transition-delay: 0.1s;

  ${LinkUnderline} {
    background: ${(p) => (p.isCurrent || p.isPartiallyCurrent ? p.theme.colors.primary : '')};
    opacity: ${(p) => (p.isCurrent || p.isPartiallyCurrent ? 1 : 0)};
    transform: ${(p) => (p.isCurrent || p.isPartiallyCurrent ? 'translateY(0)' : '')};
  }

  &:hover,
  &:focus {
    color: ${(p) => (p.isCurrent || p.isPartiallyCurrent ? '' : p.theme.colors.gray8)};

    ${LinkUnderline} {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeaderLink: React.SFC<HeaderLinkProps> = ({ location, to, text }) => {
  const isCurrent = location && location.pathname === to;
  const isPartiallyCurrent = location && location.pathname.startsWith(to);

  return (
    <LinkContainer to={to} isCurrent={isCurrent} isPartiallyCurrent={isPartiallyCurrent}>
      <Flex flexDirection="column" justifyContent="center">
        <Box py={[0, 4]}>
          <Text fontSize={1} textAlign="center">
            <LinkText fontFamily="serif">
              {text}
              <LinkUnderline active={isCurrent || isPartiallyCurrent} />
            </LinkText>
          </Text>
        </Box>
      </Flex>
    </LinkContainer>
  );
};

export default HeaderLink;
