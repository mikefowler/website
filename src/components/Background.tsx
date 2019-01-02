import { Box } from 'rebass';
import styled from '../shared/styled';

interface BackgroundProps {
  background?: string | number;
  height?: string | number;
  minHeight?: string | number;
}

const Background = styled(Box)<BackgroundProps>`
  background: ${(p) => p.background};
  min-height: ${(p) => p.minHeight};
`;

export default Background;
