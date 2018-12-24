import { Box, Flex } from '@rebass/grid';
import { graphql as gql, StaticQuery } from 'gatsby';
import * as React from 'react';

import idx from 'idx';
import {
  HeaderQuery as HeaderQueryInterface,
  HeaderQuery_site_siteMetadata_header_navlinks,
} from '../../typings/__generated__/HeaderQuery';
import Container from './Container';
import HeaderLink from './HeaderLink';
import HideFromScreenReaders from './HideFromScreenReaders';
import HideVisually from './HideVisually';
import Link from './Link';
import Logo from './Logo';

interface HeaderProps {
  location: Location;
  siteTitle: string;
}

const HeaderQuery = gql`
  query HeaderQuery {
    site {
      siteMetadata {
        header {
          navlinks {
            url
            text
          }
        }
      }
    }
  }
`;

function getNavlinks(props: HeaderQueryInterface) {
  return idx(
    props,
    (_) => _.site.siteMetadata.header.navlinks,
  ) as HeaderQuery_site_siteMetadata_header_navlinks[];
}

const Header: React.SFC<HeaderProps> = ({ location, siteTitle }) => (
  <StaticQuery query={HeaderQuery}>
    {(data: HeaderQueryInterface) => {
      const navlinks = getNavlinks(data);

      const links = navlinks.map((link) => (
        <Box key={link.url as string} flex={['unset', 1]} px={2} order={1}>
          <HeaderLink location={location} to={link.url as string} text={link.text as string} />
        </Box>
      ));

      // Splice the logo into the middle of the navigation links
      links.splice(
        Math.round(navlinks.length / 2),
        0,
        <Box key="/" flex={['unset', 1]} order={[-1, 1]} px={2} width={['100%', 'auto']}>
          <Link to="/" tabIndex={1}>
            <HideVisually>Home</HideVisually>
            <HideFromScreenReaders>
              <Logo expanded={location.pathname === '/'} />
            </HideFromScreenReaders>
          </Link>
        </Box>,
      );

      return (
        <Container as="header">
          <HideVisually>
            <h1>{siteTitle}</h1>
          </HideVisually>
          <Box as="nav">
            <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
              {links}
            </Flex>
          </Box>
        </Container>
      );
    }}
  </StaticQuery>
);

export default Header;
