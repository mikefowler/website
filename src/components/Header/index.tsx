import { Box, Flex } from '@rebass/grid';
import { graphql as gql, StaticQuery } from 'gatsby';
import idx from 'idx';
import * as React from 'react';

import {
  HeaderQuery as HeaderQueryInterface,
  HeaderQuery_site_siteMetadata_header_navlinks,
} from '../../../typings/__generated__/HeaderQuery';
import styled, { css } from '../../shared/styled';
import Container from '../Container';
import HideFromScreenReaders from '../HideFromScreenReaders';
import HideVisually from '../HideVisually';
import Link from '../Link';
import Logo from '../Logo';
import HeaderLink from './HeaderLink';

const HeaderContainer = styled(Container)<{ floating?: boolean }>`
  ${({ floating }) =>
    floating &&
    css`
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      width: 100%;
    `}
`;

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

interface HeaderProps {
  location: Location;
  siteTitle: string;
  floating?: boolean;
  inverse?: boolean;
}

const Header: React.SFC<HeaderProps> = ({ floating, inverse, location, siteTitle }) => (
  <StaticQuery query={HeaderQuery}>
    {(data: HeaderQueryInterface) => {
      const navlinks = getNavlinks(data);

      const links = navlinks.map((link) => (
        <Box key={link.url as string} flex={['unset', 1]} px={2} order={1}>
          <HeaderLink
            location={location}
            to={link.url as string}
            text={link.text as string}
            inverse={inverse}
          />
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
              <Logo inverse={inverse} expanded={location.pathname === '/'} />
            </HideFromScreenReaders>
          </Link>
        </Box>,
      );

      return (
        <HeaderContainer as="header" floating={floating}>
          <HideVisually>
            <h1>{siteTitle}</h1>
          </HideVisually>
          <Box as="nav">
            <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
              {links}
            </Flex>
          </Box>
        </HeaderContainer>
      );
    }}
  </StaticQuery>
);

export default Header;
