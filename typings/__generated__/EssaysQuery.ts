/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EssaysQuery
// ====================================================

export interface EssaysQuery_essays_edges_node_frontmatter {
  title: string | null;
}

export interface EssaysQuery_essays_edges_node_fields {
  slug: string | null;
}

export interface EssaysQuery_essays_edges_node {
  /**
   * The id of this node.
   */
  id: string;
  frontmatter: EssaysQuery_essays_edges_node_frontmatter | null;
  fields: EssaysQuery_essays_edges_node_fields | null;
}

export interface EssaysQuery_essays_edges {
  /**
   * The item at the end of the edge
   */
  node: EssaysQuery_essays_edges_node | null;
}

export interface EssaysQuery_essays {
  /**
   * A list of edges.
   */
  edges: (EssaysQuery_essays_edges | null)[] | null;
}

export interface EssaysQuery {
  /**
   * Connection to all MarkdownRemark nodes
   */
  essays: EssaysQuery_essays | null;
}

export interface EssaysQueryVariables {
  slugs: string[];
}
