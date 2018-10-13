declare module 'gatsby-transformer-sharp/fragments';

interface GatsbyPage {
  location: Location;
}

interface GatsbyCollectionLayoutProps {
  pageContext: {
    slug: string;
  };
}

interface GatsbyCollectionPaginationLayoutProps {
  pageContext: {
    items: Object[];
    isFirst: boolean;
    isLast: boolean;
    currentPage: number;
    totalPages: number;
  };
}
