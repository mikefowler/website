/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EssayTemplateQuery
// ====================================================

export interface EssayTemplateQuery_site_siteMetadata_author {
  name: string | null;
  email: string | null;
}

export interface EssayTemplateQuery_site_siteMetadata {
  title: string | null;
  description: string | null;
  author: EssayTemplateQuery_site_siteMetadata_author | null;
}

export interface EssayTemplateQuery_site {
  siteMetadata: EssayTemplateQuery_site_siteMetadata | null;
}

export interface EssayTemplateQuery_markdownRemark_frontmatter {
  title: string | null;
}

export interface EssayTemplateQuery_markdownRemark_fields {
  slug: string | null;
}

export interface EssayTemplateQuery_markdownRemark {
  html: string | null;
  excerpt: string | null;
  frontmatter: EssayTemplateQuery_markdownRemark_frontmatter | null;
  fields: EssayTemplateQuery_markdownRemark_fields | null;
}

export interface EssayTemplateQuery {
  site: EssayTemplateQuery_site | null;
  markdownRemark: EssayTemplateQuery_markdownRemark | null;
}

export interface EssayTemplateQueryVariables {
  slug: string;
}
