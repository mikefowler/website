declare module 'rebass/emotion' {
  import { StyledComponent } from 'react-emotion';
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
  export interface IBoxProps
    extends BackgroundProps,
      ColorProps,
      FontSizeProps,
      WidthProps,
      SpacingProps {
    css?: Object;
    className?: string;
  }

  export interface IFlexProps
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

  export const Box: StyledComponent<BoxProps>;
  export const Flex: StyledComponent<FlexProps>;
  export const Text: StyledComponent<TextProps>;
  export const Heading: StyledComponent<HeadingProps>;
  export const Button: StyledComponent<ButtonProps>;
  export const Link: StyledComponent<LinkProps>;
  export const Image: StyledComponent<ImageProps>;
  export const Card: StyledComponent<CardProps>;
}
