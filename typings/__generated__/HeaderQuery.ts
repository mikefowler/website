/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HeaderQuery
// ====================================================

export interface HeaderQuery_site_siteMetadata_header_navlinks {
  url: string | null;
  text: string | null;
}

export interface HeaderQuery_site_siteMetadata_header {
  navlinks: (HeaderQuery_site_siteMetadata_header_navlinks | null)[] | null;
}

export interface HeaderQuery_site_siteMetadata {
  header: HeaderQuery_site_siteMetadata_header | null;
}

export interface HeaderQuery_site {
  siteMetadata: HeaderQuery_site_siteMetadata | null;
}

export interface HeaderQuery {
  site: HeaderQuery_site | null;
}
