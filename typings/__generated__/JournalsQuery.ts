/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: JournalsQuery
// ====================================================

export interface JournalsQuery_journals_edges_node_frontmatter {
  title: string | null;
}

export interface JournalsQuery_journals_edges_node_fields {
  slug: string | null;
  date: any | null;
}

export interface JournalsQuery_journals_edges_node {
  /**
   * The id of this node.
   */
  id: string;
  excerpt: string | null;
  frontmatter: JournalsQuery_journals_edges_node_frontmatter | null;
  fields: JournalsQuery_journals_edges_node_fields | null;
}

export interface JournalsQuery_journals_edges {
  /**
   * The item at the end of the edge
   */
  node: JournalsQuery_journals_edges_node | null;
}

export interface JournalsQuery_journals {
  /**
   * A list of edges.
   */
  edges: (JournalsQuery_journals_edges | null)[] | null;
}

export interface JournalsQuery {
  /**
   * Connection to all MarkdownRemark nodes
   */
  journals: JournalsQuery_journals | null;
}

export interface JournalsQueryVariables {
  slugs: string[];
}
