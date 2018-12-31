import * as React from 'react';
import { Text } from 'rebass';

import styled, { css } from '../shared/styled';
import { ThemeInterface } from '../shared/theme';
import HideVisibility from './HideVisibility';

export interface LogoProps {
  expanded?: boolean;
  inverse?: boolean;
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

const wordmarkExpandedStyles = (theme: ThemeInterface, color: string) => `
  color: ${color};

  ${WordmarkLeft} {
    transform: translateX(0);
  }

  ${WordmarkRight} {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Wordmark = styled.div<LogoProps>`
  color: ${(p) => (p.inverse ? p.theme.colors.white : p.theme.colors.text)};
  position: relative;
  transition: 0.2s color;

  ${(p) =>
    p.expanded &&
    wordmarkExpandedStyles(p.theme, p.inverse ? p.theme.colors.white : p.theme.colors.primary)}

  @media (hover: hover) {
    &:hover {
      ${(p) =>
        wordmarkExpandedStyles(p.theme, p.inverse ? p.theme.colors.white : p.theme.colors.primary)}
    }
  }
`;

const Logo: React.SFC<LogoProps> = ({ expanded, inverse }) => (
  <Text fontWeight="normal" textAlign="center" fontFamily="cursive" fontSize={40}>
    <Wordmark inverse={inverse} expanded={expanded}>
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
