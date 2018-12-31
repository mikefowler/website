import * as React from 'react';

import { Box } from 'rebass';
import { HeightProps, SpaceProps, WidthProps } from 'styled-system';
import theme from '../shared/theme';

export interface BarProps extends SpaceProps, WidthProps, HeightProps {
  color?: string;
  inline?: boolean;
}

const Bar: React.SFC<BarProps> = ({
  color = theme.colors.gray2,
  inline,
  height = 2,
  ...restProps
}) => (
  <Box bg={color} css={{ height, display: inline ? 'inline-block' : 'block' }} {...restProps} />
);

export default Bar;
