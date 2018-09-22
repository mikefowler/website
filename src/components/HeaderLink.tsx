import * as React from 'react';
import { Text } from 'rebass/emotion';

import { LinkGetProps } from '@reach/router';
import { css } from 'emotion';
import styled from '../shared/styled';
import Box from './Box';
import UnstyledLink from './UnstyledLink';

export interface HeaderLinkProps {
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

const LinkContainer = styled(UnstyledLink, {
  shouldForwardProp: (prop) => !['isCurrent', 'isPartiallyCurrent'].includes(prop),
})<LinkContainerProps>`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${LinkUnderline} {
    background: ${(p) => (p.isCurrent || p.isPartiallyCurrent ? p.theme.colors.primary : '')};
    opacity: ${(p) => (p.isCurrent || p.isPartiallyCurrent ? 1 : 0)};
    transform: ${(p) => (p.isCurrent || p.isPartiallyCurrent ? 'translateY(0)' : '')};
  }

  &:hover {
    ${LinkUnderline} {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeaderLink: React.SFC<HeaderLinkProps> = ({ to, text }) => {
  const isCurrent = location.pathname === to;
  const isPartiallyCurrent = location.pathname.startsWith(to);

  return (
    <LinkContainer to={to} isCurrent={isCurrent} isPartiallyCurrent={isPartiallyCurrent}>
      <Box flexDirection="column" justifyContent="center">
        <Text textAlign="center">
          <LinkText fontFamily="serif">
            {text}
            <LinkUnderline active={isCurrent || isPartiallyCurrent} />
          </LinkText>
        </Text>
      </Box>
    </LinkContainer>
  );
};

export default HeaderLink;
