/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AudioPageQuery
// ====================================================

export interface AudioPageQuery_episodes_edges_node_frontmatter_podcast_image_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface AudioPageQuery_episodes_edges_node_frontmatter_podcast_image_childImageSharp {
  fluid: AudioPageQuery_episodes_edges_node_frontmatter_podcast_image_childImageSharp_fluid | null;
}

export interface AudioPageQuery_episodes_edges_node_frontmatter_podcast_image {
  /**
   * The child of this node of type imageSharp
   */
  childImageSharp: AudioPageQuery_episodes_edges_node_frontmatter_podcast_image_childImageSharp | null;
}

export interface AudioPageQuery_episodes_edges_node_frontmatter_podcast {
  summary: string | null;
  file: string | null;
  image: AudioPageQuery_episodes_edges_node_frontmatter_podcast_image | null;
}

export interface AudioPageQuery_episodes_edges_node_frontmatter {
  title: string | null;
  podcast: AudioPageQuery_episodes_edges_node_frontmatter_podcast | null;
}

export interface AudioPageQuery_episodes_edges_node {
  /**
   * The id of this node.
   */
  id: string;
  frontmatter: AudioPageQuery_episodes_edges_node_frontmatter | null;
}

export interface AudioPageQuery_episodes_edges {
  /**
   * The item at the end of the edge
   */
  node: AudioPageQuery_episodes_edges_node | null;
}

export interface AudioPageQuery_episodes {
  /**
   * A list of edges.
   */
  edges: (AudioPageQuery_episodes_edges | null)[] | null;
}

export interface AudioPageQuery {
  /**
   * Connection to all MarkdownRemark nodes
   */
  episodes: AudioPageQuery_episodes | null;
}
