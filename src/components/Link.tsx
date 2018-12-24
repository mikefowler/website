import { Link as GatsbyLink } from 'gatsby';
import * as React from 'react';
import { BoxProps } from 'rebass';
import { alignSelf, color, flex, fontSize, order, space, width } from 'styled-system';

import styled from '../shared/styled';

interface LinkProps extends BoxProps {
  to: string;
  inline?: boolean;
  tabIndex?: number;
}

const Anchor = styled(GatsbyLink)`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${flex}
  ${order}
  ${alignSelf}
`;

const Link: React.SFC<LinkProps> = ({ tabIndex, to, children, inline, ...restProps }) => {
  /** Is the `to` prop an external link? */
  const isInternalLink = /^\/(?!\/)/.test(to);

  const linkProps = {
    tabIndex,
    target: !isInternalLink ? '_blank' : undefined,
    rel: !isInternalLink ? 'noopener noreferrer' : undefined,
  };

  return (
    // @ts-ignore
    <Anchor to={to} {...linkProps} {...restProps}>
      {children}
    </Anchor>
  );
};

export default Link;
