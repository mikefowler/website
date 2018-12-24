import * as React from 'react';
import { Text } from 'rebass';

import styled from '../shared/styled';
import { ThemeInterface } from '../shared/theme';
import HideVisibility from './HideVisibility';

export interface LogoProps {
  expanded?: boolean;
}

const WordmarkLeft = styled.span`
  position: absolute;
  transform: translateX(31px);
  transition: 0.2s transform cubic-bezier(0.785, 0.135, 0.15, 0.86);
`;

const WordmarkRight = styled.span`
  display: inline-block;
  transform: translateX(10px);
  transition-property: transform, opacity;
  transition-duration: 0.2s;
  transition-delay: 0.1s;
  transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
  opacity: 0;
`;

const wordmarkExpandedStyles = (theme: ThemeInterface) => `
  color: ${theme.colors.primary};

  ${WordmarkLeft} {
    transform: translateX(0);
  }

  ${WordmarkRight} {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Wordmark = styled.div<LogoProps>`
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  transition: 0.2s color;

  ${(p) => (p.expanded ? wordmarkExpandedStyles(p.theme) : '')}

  @media (hover: hover) {
    &:hover {
      ${({ theme }) => wordmarkExpandedStyles(theme)}
    }
  }
`;

const Logo: React.SFC<LogoProps> = ({ expanded }) => (
  <Text fontWeight="normal" textAlign="center" fontFamily="cursive" fontSize={40}>
    <Wordmark expanded={expanded}>
      <WordmarkLeft>
        M<HideVisibility>ike</HideVisibility>
      </WordmarkLeft>
      <WordmarkRight>
        <HideVisibility>M</HideVisibility>
        ike
      </WordmarkRight>
    </Wordmark>
  </Text>
);

export default Logo;
