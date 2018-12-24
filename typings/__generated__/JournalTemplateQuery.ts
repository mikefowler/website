/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: JournalTemplateQuery
// ====================================================

export interface JournalTemplateQuery_site_siteMetadata_author {
  name: string | null;
  email: string | null;
}

export interface JournalTemplateQuery_site_siteMetadata {
  title: string | null;
  description: string | null;
  author: JournalTemplateQuery_site_siteMetadata_author | null;
}

export interface JournalTemplateQuery_site {
  siteMetadata: JournalTemplateQuery_site_siteMetadata | null;
}

export interface JournalTemplateQuery_markdownRemark_frontmatter {
  title: string | null;
}

export interface JournalTemplateQuery_markdownRemark {
  html: string | null;
  excerpt: string | null;
  frontmatter: JournalTemplateQuery_markdownRemark_frontmatter | null;
}

export interface JournalTemplateQuery {
  site: JournalTemplateQuery_site | null;
  markdownRemark: JournalTemplateQuery_markdownRemark | null;
}

export interface JournalTemplateQueryVariables {
  slug: string;
}
