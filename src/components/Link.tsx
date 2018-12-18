import styled from '@emotion/styled';
import { Link as RebassLink } from '@rebass/emotion';
import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import * as React from 'react';

import { themed } from '../shared/theme';

const LinkStyled = styled(GatsbyLink)(themed('Link'));
const RebassLinkStyled = RebassLink.withComponent('a');

const Link: React.SFC<GatsbyLinkProps<any>> = ({ to, className, children }) => {
  const isInternalLink = /^\/(?!\/)/.test(to);

  if (isInternalLink) {
    return (
      <LinkStyled className={className} to={to}>
        {children}
      </LinkStyled>
    );
  }

  return (
    <RebassLinkStyled className={className} href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </RebassLinkStyled>
  );
};

export default Link;
