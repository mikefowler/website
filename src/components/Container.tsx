import { Card } from 'rebass';
import styled from '../shared/styled';

const Container = styled<typeof Card>(Card).attrs({
  m: '0 auto',
  px: '2rem',
})`
  max-width: 1192px;
`;

export default Container;
