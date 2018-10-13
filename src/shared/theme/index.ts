import colors from './colors';
import fonts from './fonts';
import fontSizes from './fontSizes';

export const themed = (key: string) => (props: any) => props.theme[key];

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
