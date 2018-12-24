import palx from 'palx';

export const palette = palx('#7b68ee');

export interface Colors {
  [key: string]: string;

  // Base
  base: string;
  black: string;

  // Gray hues
  gray0: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;

  // Red hues
  red0: string;
  red1: string;
  red2: string;
  red3: string;
  red4: string;
  red5: string;
  red6: string;
  red7: string;
  red8: string;
  red9: string;

  // Orange hues
  orange0: string;
  orange1: string;
  orange2: string;
  orange3: string;
  orange4: string;
  orange5: string;
  orange6: string;
  orange7: string;
  orange8: string;
  orange9: string;

  // Yellow hues
  yellow0: string;
  yellow1: string;
  yellow2: string;
  yellow3: string;
  yellow4: string;
  yellow5: string;
  yellow6: string;
  yellow7: string;
  yellow8: string;
  yellow9: string;

  // Lime hues
  lime0: string;
  lime1: string;
  lime2: string;
  lime3: string;
  lime4: string;
  lime5: string;
  lime6: string;
  lime7: string;
  lime8: string;
  lime9: string;

  // Green hues
  green0: string;
  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;
  green7: string;
  green8: string;
  green9: string;

  // Teal hues
  teal0: string;
  teal1: string;
  teal2: string;
  teal3: string;
  teal4: string;
  teal5: string;
  teal6: string;
  teal7: string;
  teal8: string;
  teal9: string;

  // Cyan hues
  cyan0: string;
  cyan1: string;
  cyan2: string;
  cyan3: string;
  cyan4: string;
  cyan5: string;
  cyan6: string;
  cyan7: string;
  cyan8: string;
  cyan9: string;

  // Blue hues
  blue0: string;
  blue1: string;
  blue2: string;
  blue3: string;
  blue4: string;
  blue5: string;
  blue6: string;
  blue7: string;
  blue8: string;
  blue9: string;

  // Indigo hues
  indigo0: string;
  indigo1: string;
  indigo2: string;
  indigo3: string;
  indigo4: string;
  indigo5: string;
  indigo6: string;
  indigo7: string;
  indigo8: string;
  indigo9: string;

  // Violet hues
  violet0: string;
  violet1: string;
  violet2: string;
  violet3: string;
  violet4: string;
  violet5: string;
  violet6: string;
  violet7: string;
  violet8: string;
  violet9: string;

  // Fuschia hues
  fuschia0: string;
  fuschia1: string;
  fuschia2: string;
  fuschia3: string;
  fuschia4: string;
  fuschia5: string;
  fuschia6: string;
  fuschia7: string;
  fuschia8: string;
  fuschia9: string;

  // Pink hues
  pink0: string;
  pink1: string;
  pink2: string;
  pink3: string;
  pink4: string;
  pink5: string;
  pink6: string;
  pink7: string;
  pink8: string;
  pink9: string;
}

const colors = Object.keys(palette).reduce<{ [key: string]: string }>((a, key) => {
  const value = palette[key];

  if (Array.isArray(value)) {
    a[key] = value[5];
    value.forEach((val, i) => {
      a[key + i] = val;
    });
  } else {
    a[key] = value;
  }

  return a;
}, {}) as Colors;

export default {
  // Generic
  ...colors,
  white: '#fff',

  // Named
  link: colors.gray8,
  linkDecoration: colors.base,
  text: colors.gray9,
  primary: colors.base,
};
