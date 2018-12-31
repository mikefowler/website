import styled from '../../shared/styled';

export interface HeaderLinkUnderlineProps {
  active?: boolean;
}

const HeaderLinkUnderline = styled.div<HeaderLinkUnderlineProps>`
  background: ${(props) => props.theme.colors.gray3};
  bottom: -0.5rem;
  height: 2px;
  left: 25%;
  opacity: 0;
  position: absolute;
  transform: translateY(5px);
  transition-duration: 0.2s;
  transition-property: transform, opacity;
  transition-timing-function: ${(props) => props.theme.easings.snap};
  width: 50%;
`;

export default HeaderLinkUnderline;
