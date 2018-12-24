/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CodesQuery
// ====================================================

export interface CodesQuery_codes_edges_node_frontmatter {
  title: string | null;
}

export interface CodesQuery_codes_edges_node_fields {
  slug: string | null;
}

export interface CodesQuery_codes_edges_node {
  /**
   * The id of this node.
   */
  id: string;
  frontmatter: CodesQuery_codes_edges_node_frontmatter | null;
  fields: CodesQuery_codes_edges_node_fields | null;
}

export interface CodesQuery_codes_edges {
  /**
   * The item at the end of the edge
   */
  node: CodesQuery_codes_edges_node | null;
}

export interface CodesQuery_codes {
  /**
   * A list of edges.
   */
  edges: (CodesQuery_codes_edges | null)[] | null;
}

export interface CodesQuery {
  /**
   * Connection to all MarkdownRemark nodes
   */
  codes: CodesQuery_codes | null;
}

export interface CodesQueryVariables {
  slugs: string[];
}
