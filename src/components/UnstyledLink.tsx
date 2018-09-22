import { Link } from 'gatsby';

import styled from '../shared/styled';

const UnstyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
`;

export default UnstyledLink;
