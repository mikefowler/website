import styled, { StyledComponent } from 'react-emotion';
import {
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from 'styled-system';

interface BoxProps extends ColorProps, FontSizeProps, SpaceProps, WidthProps {
  className?: string;
}

const Box: StyledComponent<BoxProps, {}, {}> = styled.div`
  ${color}
  ${fontSize}
  ${space}
  ${width}
`;

export default Box;
