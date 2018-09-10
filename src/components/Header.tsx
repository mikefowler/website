import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'react-emotion';
import Container from './Container';

interface HeaderProps {
  siteTitle: string;
}

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const StyledLink = styled(Link)`
  color: white;
`;

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <h1 style={{ margin: 0 }}>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
    </Container>
  </StyledHeader>
);

export default Header;
