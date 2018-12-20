import colors, { Colors } from './colors';
import fonts from './fonts';
import fontSizes from './fontSizes';

export const themed = (key: string) => (props: any) => props.theme[key];

export interface ThemeInterface {
  colors: Colors;
  fontSizes: number[];
  fonts: typeof fonts;
  easings: {
    snap: string;
  };
}

export default {
  colors,
  fontSizes,
  fonts,
  easings: {
    snap: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  },
  Link: {
    color: colors.text,
    textDecoration: 'underline',
    textDecorationSkip: 'ink',
    textDecorationColor: colors.primary,

    ':hover': {
      color: colors.primary,
    },
  },
};
