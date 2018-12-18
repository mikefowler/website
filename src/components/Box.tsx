import { Box as BaseBox, IBoxProps as BaseBoxProps } from 'rebass';
import styled from 'styled-components';
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

const Box = styled(BaseBox)`
  ${flex};
  ${flexBasis};
  ${flexDirection};
  ${justifyContent};
  ${order};
  ${maxWidth};
`;

export default Box;
