/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EssayPageQuery
// ====================================================

export interface EssayPageQuery_essays_edges_node_frontmatter {
  title: string | null;
}

export interface EssayPageQuery_essays_edges_node_fields {
  slug: string | null;
}

export interface EssayPageQuery_essays_edges_node {
  frontmatter: EssayPageQuery_essays_edges_node_frontmatter | null;
  fields: EssayPageQuery_essays_edges_node_fields | null;
}

export interface EssayPageQuery_essays_edges {
  /**
   * The item at the end of the edge
   */
  node: EssayPageQuery_essays_edges_node | null;
}

export interface EssayPageQuery_essays {
  /**
   * A list of edges.
   */
  edges: (EssayPageQuery_essays_edges | null)[] | null;
}

export interface EssayPageQuery {
  /**
   * Connection to all MarkdownRemark nodes
   */
  essays: EssayPageQuery_essays | null;
}

export interface EssayPageQueryVariables {
  ids: string[];
}
