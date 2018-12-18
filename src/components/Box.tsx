import styled from '@emotion/styled';
import { Box as BaseBox, IBoxProps as BaseBoxProps } from '@rebass/emotion';
import {
  flex,
  flexBasis,
  FlexBasisProps,
  flexDirection,
  FlexDirectionProps,
  FlexProps,
  justifyContent,
  JustifyContentProps,
  maxWidth,
  MaxWidthProps,
  order,
  OrderProps,
} from 'styled-system';

interface BoxProps
  extends BaseBoxProps,
    FlexDirectionProps,
    FlexProps,
    FlexBasisProps,
    JustifyContentProps,
    OrderProps,
    MaxWidthProps {
  hidden?: boolean;
}

const Box = styled(BaseBox, { shouldForwardProp: (prop) => !['order'].includes(prop) })`
  ${flex};
  ${flexBasis};
  ${flexDirection};
  ${justifyContent};
  ${order};
  ${maxWidth};
`;

export default Box;
