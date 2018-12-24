/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CodeTemplateQuery
// ====================================================

export interface CodeTemplateQuery_site_siteMetadata_author {
  name: string | null;
  email: string | null;
}

export interface CodeTemplateQuery_site_siteMetadata {
  title: string | null;
  description: string | null;
  author: CodeTemplateQuery_site_siteMetadata_author | null;
}

export interface CodeTemplateQuery_site {
  siteMetadata: CodeTemplateQuery_site_siteMetadata | null;
}

export interface CodeTemplateQuery_markdownRemark_frontmatter {
  title: string | null;
}

export interface CodeTemplateQuery_markdownRemark {
  html: string | null;
  excerpt: string | null;
  frontmatter: CodeTemplateQuery_markdownRemark_frontmatter | null;
}

export interface CodeTemplateQuery {
  site: CodeTemplateQuery_site | null;
  markdownRemark: CodeTemplateQuery_markdownRemark | null;
}

export interface CodeTemplateQueryVariables {
  slug: string;
}
