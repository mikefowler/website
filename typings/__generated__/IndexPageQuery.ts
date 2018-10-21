/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexPageQuery
// ====================================================

export interface IndexPageQuery_images_edges_node_localFile_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface IndexPageQuery_images_edges_node_localFile_childImageSharp {
  fluid: IndexPageQuery_images_edges_node_localFile_childImageSharp_fluid | null;
}

export interface IndexPageQuery_images_edges_node_localFile {
  /**
   * The child of this node of type imageSharp
   */
  childImageSharp: IndexPageQuery_images_edges_node_localFile_childImageSharp | null;
}

export interface IndexPageQuery_images_edges_node {
  timestamp: number | null;
  localFile: IndexPageQuery_images_edges_node_localFile | null;
}

export interface IndexPageQuery_images_edges {
  /**
   * The item at the end of the edge
   */
  node: IndexPageQuery_images_edges_node | null;
}

export interface IndexPageQuery_images {
  /**
   * A list of edges.
   */
  edges: (IndexPageQuery_images_edges | null)[] | null;
}

export interface IndexPageQuery {
  /**
   * Connection to all InstaNode nodes
   */
  images: IndexPageQuery_images | null;
}
