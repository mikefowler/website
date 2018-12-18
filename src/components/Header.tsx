import { Flex } from '@rebass/emotion';
import { graphql as gql, StaticQuery } from 'gatsby';
import * as React from 'react';

import { HeaderQuery as HeaderQueryInterface } from '../../typings/__generated__/HeaderQuery';
import Box from './Box';
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

const Nav = Flex.withComponent('nav');

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

const Header: React.SFC<HeaderProps> = ({ location, siteTitle }) => (
  <StaticQuery query={HeaderQuery}>
    {(data: HeaderQueryInterface) => {
      const { navlinks } = data.site!.siteMetadata!.header!;

      const links = navlinks!.map((link: any) => (
        <Box key={link.url} flex={['unset', 1]} px={2} order={1}>
          <HeaderLink location={location} to={link.url} text={link.text} />
        </Box>
      ));

      // Splice the logo into the middle of the navigation links
      links.splice(
        Math.round(navlinks!.length / 2),
        0,
        <Box key="/" flex={['unset', 1]} order={[-1, 1]} px={2} width={['100%', 'auto']}>
          <Link to="/">
            <Box py={2}>
              <HideVisually>Home</HideVisually>
              <HideFromScreenReaders>
                <Logo />
              </HideFromScreenReaders>
            </Box>
          </Link>
        </Box>,
      );

      return (
        <header>
          <Container>
            <HideVisually>
              <h1>{siteTitle}</h1>
            </HideVisually>
            <Nav alignItems="center" justifyContent="center" flexWrap="wrap">
              {links}
            </Nav>
          </Container>
        </header>
      );
    }}
  </StaticQuery>
);

export default Header;
