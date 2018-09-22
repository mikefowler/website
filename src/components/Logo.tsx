import * as React from 'react';
import styled from 'react-emotion';
import { Text } from 'rebass/emotion';
import HideVisibility from './HideVisibility';

export interface LogoProps {
  expanded?: boolean;
}

export interface WordmarkProps extends LogoProps {}

const WordmarkLeft = styled.span`
  position: absolute;
  transform: translateX(37px);
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

const Wordmark = styled.div<WordmarkProps>`
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  transition: 0.2s color;

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.primary};

      ${WordmarkLeft} {
        transform: translateX(0);
      }

      ${WordmarkRight} {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`;

const Logo: React.SFC<LogoProps> = ({ expanded }) => (
  <Text fontSize={6} fontWeight="normal" textAlign="center" fontFamily="cursive">
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
