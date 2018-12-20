import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import * as React from 'react';
import { Link as RebassLink, LinkProps as RebassLinkProps } from 'rebass';
import styled from '../shared/styled';

interface LinkProps extends RebassLinkProps {
  to: string;
  inline?: boolean;
}

const RebassLinkInline = styled(RebassLink)({
  display: 'inline-block',
});

const Link: React.SFC<LinkProps> = ({ to, className, children, inline, ...restProps }) => {
  const isInternalLink = /^\/(?!\/)/.test(to);

  const LinkComponent = inline ? RebassLinkInline : RebassLink;

  if (isInternalLink) {
    return (
      <GatsbyLink className={className} to={to}>
        <LinkComponent as="span" {...restProps}>
          {children}
        </LinkComponent>
      </GatsbyLink>
    );
  }

  return (
    <LinkComponent
      {...restProps}
      className={className}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </LinkComponent>
  );
};

export default Link;
