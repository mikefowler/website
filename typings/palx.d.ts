declare module 'palx' {
  import * as palx from 'palx';

  export default function palx(hex: string, options?: {}): PalxPalette;

  export interface PalxPalette {
    [name: string]: string | string[];
    base: string;
    black: string;
    blue: string[];
    cyan: string[];
    fuschia: string[];
    gray: string[];
    green: string[];
    indigo: string[];
    lime: string[];
    orange: string[];
    pink: string[];
    red: string[];
    teal: string[];
    violet: string[];
    yellow: string[];
  }
}
