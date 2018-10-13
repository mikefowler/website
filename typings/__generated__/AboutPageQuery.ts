/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AboutPageQuery
// ====================================================

export interface AboutPageQuery_site_siteMetadata_author {
  email: string | null;
}

export interface AboutPageQuery_site_siteMetadata {
  author: AboutPageQuery_site_siteMetadata_author | null;
}

export interface AboutPageQuery_site {
  siteMetadata: AboutPageQuery_site_siteMetadata | null;
}

export interface AboutPageQuery_image_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface AboutPageQuery_image_childImageSharp {
  fluid: AboutPageQuery_image_childImageSharp_fluid | null;
}

export interface AboutPageQuery_image {
  /**
   * The child of this node of type imageSharp
   */
  childImageSharp: AboutPageQuery_image_childImageSharp | null;
}

export interface AboutPageQuery {
  site: AboutPageQuery_site | null;
  image: AboutPageQuery_image | null;
}
