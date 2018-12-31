import colors, { Colors } from './colors';
import fonts from './fonts';
import fontSizes from './fontSizes';

export const themed = (key: string) => (props: any) => props.theme[key];

const theme = {
  colors,
  fontSizes,
  fonts,
  easings: {
    snap: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  },
  header: {
    textDefault: 'inherit',
    textInverseDefault: colors.gray2,
  },
};

export type ThemeInterface = typeof theme;

export default theme;
