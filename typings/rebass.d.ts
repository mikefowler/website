declare module 'rebass' {
  import { StyledComponent } from 'styled-components';
  import {
    BackgroundProps,
    FontSizeProps,
    WidthProps,
    BorderColorProps,
    BordersProps,
    BorderRadiusProps,
    ColorProps,
    FlexWrapProps,
    AlignItemsProps,
    FontFamilyProps,
    FontWeightProps,
    TextAlignProps,
    LineHeightProps,
    LetterSpacingProps,
    HeightProps,
    BoxShadowProps,
    BackgroundImageProps,
    BackgroundPositionProps,
    BackgroundSizeProps,
    BackgroundRepeatProps,
    OpacityProps,
  } from 'styled-system';
  import * as React from 'react';
  export interface BoxProps
    extends BackgroundProps,
      ColorProps,
      FontSizeProps,
      WidthProps,
      SpacingProps {
    css?: Object;
    className?: string;
  }

  export interface FlexProps
    extends BoxProps,
      FlexWrapProps,
      AlignItemsProps,
      JustifyContentProps {}

  export interface TextProps
    extends BoxProps,
      FontFamilyProps,
      FontWeightProps,
      FontSizeProps,
      TextAlignProps,
      LineHeightProps,
      LetterSpacingProps {}

  export interface HeadingProps extends TextProps {}

  export interface ButtonProps
    extends BoxProps,
      FontWeightProps,
      BorderColorProps,
      BordersProps,
      BorderRadiusProps {
    variant?: string;
  }

  export interface LinkProps extends BoxProps {}

  export interface ImageProps extends BoxProps, HeightProps, BorderRadiusProps {}

  export interface CardProps
    extends BoxProps,
      BorderProps,
      BoxShadowProps,
      BackgroundImageProps,
      BackgroundPositionProps,
      BackgroundSizeProps,
      BackgroundRepeatProps,
      OpacityProps {
    variant?: string;
  }

  export const Box: StyledComponent<any, any, BoxProps>;
  export const Flex: StyledComponent<any, any, FlexProps>;
  export const Text: StyledComponent<any, any, TextProps>;
  export const Heading: StyledComponent<any, any, HeadingProps>;
  export const Button: StyledComponent<any, any, ButtonProps>;
  export const Link: StyledComponent<any, any, LinkProps>;
  export const Image: StyledComponent<any, any, ImageProps>;
  export const Card: StyledComponent<any, any, CardProps>;
}
