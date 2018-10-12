declare module '@rebass/grid/emotion' {
  import {
    SpaceProps,
    ColorProps,
    WidthProps,
    FontSizeProps,
    FlexProps,
    OrderProps,
    AlignSelfProps,
    FlexWrapProps,
    FlexDirectionProps,
    AlignItemsProps,
    JustifyContentProps,
  } from 'styled-system';
  import { StyledComponent } from 'react-emotion';
  import * as React from 'react';
  import { Box, Flex } from '@rebass/grid/emotion';

  import Theme from '../src/shared/theme';

  export interface GridBoxProps
    extends SpaceProps,
      ColorProps,
      WidthProps,
      FontSizeProps,
      FlexProps,
      OrderProps,
      AlignSelfProps {
    is?: string;
  }

  export interface GridFlexProps
    extends SpaceProps,
      FlexWrapProps,
      FlexDirectionProps,
      AlignItemsProps,
      JustifyContentProps {}

  export const Box: React.SFC<GridBoxProps>;
  export const Flex: React.SFC<GridFlexProps>;
}
