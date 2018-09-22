declare module 'rebass/emotion' {
  import { StyledComponent } from 'react-emotion';
  import * as React from 'react';

  type SpacingValue = number | string;
  type WidthValue = number | string | null;
  type FontSizeValue = number;

  interface SpacingProps {
    m?: SpacingValue | SpacingValue[];
    mt?: SpacingValue | SpacingValue[];
    mr?: SpacingValue | SpacingValue[];
    mb?: SpacingValue | SpacingValue[];
    ml?: SpacingValue | SpacingValue[];
    mx?: SpacingValue | SpacingValue[];
    my?: SpacingValue | SpacingValue[];
    p?: SpacingValue | SpacingValue[];
    pt?: SpacingValue | SpacingValue[];
    pr?: SpacingValue | SpacingValue[];
    pb?: SpacingValue | SpacingValue[];
    pl?: SpacingValue | SpacingValue[];
    px?: SpacingValue | SpacingValue[];
    py?: SpacingValue | SpacingValue[];
  }

  interface BorderProps {
    border?: string;
    borderColor?: string;
    borderRadius?: string | number;
  }

  export interface BoxProps extends SpacingProps {
    bg?: string;
    color?: string;
    css?: Object;
    className?: string;
    fontSize?: FontSizeValue | FontSizeValue[];
    width?: WidthValue | WidthValue[];
  }

  export interface FlexProps extends BoxProps {
    flexWrap?: string;
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;
  }

  export interface TextProps extends BoxProps {
    fontFamily?: string;
    fontWeight?: string;
    textAlign?: string;
    lineHeight?: number | string;
    letterSpacing?: number | string;
  }

  export interface HeadingProps extends TextProps {}

  export interface ButtonProps extends BoxProps, BorderProps {
    fontWeight?: string | number;
    variant?: string;
  }

  export interface LinkProps extends BoxProps {}

  export interface ImageProps extends BoxProps {
    height?: number | string;
    borderRadius?: number | string;
  }

  export interface CardProps extends BoxProps, BorderProps {
    boxShadow?: string;
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    backgroundRepeat?: string;
    opacity?: number;
    variant?: string;
  }

  export const Box: StyledComponent<BoxProps>;
  export const Flex: StyledComponent<FlexProps>;
  export const Text: StyledComponent<TextProps>;
  export const Heading: StyledComponent<HeadingProps>;
  export const Button: StyledComponent<ButtonProps>;
  export const Link: StyledComponent<LinkProps>;
  export const Image: StyledComponent<ImageProps>;
  export const Card: StyledComponent<CardProps>;
}
