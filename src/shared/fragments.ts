import { graphql as gql } from 'gatsby';

export const gatsbyImageSharpFixed = gql`
  fragment ImageFixed on ImageSharpFixed {
    base64
    width
    height
    src
    srcSet
  }
`;

export const gatsbyImageSharpFixedTracedSVG = gql`
  fragment ImageFixed_tracedSVG on ImageSharpFixed {
    tracedSVG
    width
    height
    src
    srcSet
  }
`;

export const gatsbyImageSharpFixedPreferWebp = gql`
  fragment ImageFixed_withWebp on ImageSharpFixed {
    base64
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;

export const gatsbyImageSharpFixedPreferWebpTracedSVG = gql`
  fragment ImageFixed_withWebp_tracedSVG on ImageSharpFixed {
    tracedSVG
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;

export const gatsbyImageSharpFixedNoBase64 = gql`
  fragment ImageFixed_noBase64 on ImageSharpFixed {
    width
    height
    src
    srcSet
  }
`;

export const gatsbyImageSharpFixedPreferWebpNoBase64 = gql`
  fragment ImageFixed_withWebp_noBase64 on ImageSharpFixed {
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;

export const gatsbyImageSharpFluid = gql`
  fragment ImageFluid on ImageSharpFluid {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`;

export const gatsbyImageSharpFluidTracedSVG = gql`
  fragment ImageFluid_tracedSVG on ImageSharpFluid {
    tracedSVG
    aspectRatio
    src
    srcSet
    sizes
  }
`;

export const gatsbyImageSharpFluidPreferWebp = gql`
  fragment ImageFluid_withWebp on ImageSharpFluid {
    base64
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;

export const gatsbyImageSharpFluidPreferWebpTracedSVG = gql`
  fragment ImageFluid_withWebp_tracedSVG on ImageSharpFluid {
    tracedSVG
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;

export const gatsbyImageSharpFluidNoBase64 = gql`
  fragment ImageFluid_noBase64 on ImageSharpFluid {
    aspectRatio
    src
    srcSet
    sizes
  }
`;

export const gatsbyImageSharpFluidPreferWebpNoBase64 = gql`
  fragment ImageFluid_withWebp_noBase64 on ImageSharpFluid {
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;
