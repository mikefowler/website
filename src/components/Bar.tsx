import * as React from 'react';

import { Box } from 'rebass/emotion';
import { HeightProps, SpaceProps, WidthProps } from 'styled-system';
import theme from '../shared/theme';

export interface BarProps extends SpaceProps, WidthProps, HeightProps {
  color?: typeof theme['colors'];
}

const Bar: React.SFC<BarProps> = ({ color = theme.colors.gray2, height = 2, ...restProps }) => (
  <Box bg={color} css={{ height }} {...restProps} />
);

export default Bar;
