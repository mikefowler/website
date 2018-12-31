import React from 'react';

import styled, { css } from '../../shared/styled';
import Link from '../Link';
import HeaderLinkUnderline from './HeaderLinkUnderline';

export interface HeaderLinkContainerProps {
  isInverse?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;
}

const HeaderLinkContainer = styled(({ isDisabled, isInverse, isActive, ...props }) => (
  <Link {...props} />
))<HeaderLinkContainerProps>`
  box-shadow: none;
  color: ${(p) => (p.isInverse ? p.theme.header.textInverseDefault : p.theme.header.textDefault)};
  cursor: ${(p) => (p.isDisabled ? 'default' : '')};
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition-property: color;
  transition-duration: 0.2s;
  transition-delay: 0.1s;

  ${(p) =>
    p.isActive &&
    css`
      color: ${p.isInverse ? p.theme.colors.white : p.theme.colors.primary};
    `}

  ${HeaderLinkUnderline} {
    ${(p) =>
      p.isActive &&
      css`
        background: ${p.isInverse ? p.theme.colors.white : p.theme.colors.primary};
      `}

    opacity: ${(p) => (p.isActive ? 1 : 0)};
    transform: ${(p) => (p.isActive ? 'translateY(0)' : '')};
  }

  &:hover,
  &:focus {
    ${(p) =>
      !p.isActive &&
      css`
        color: ${p.isInverse ? p.theme.colors.gray1 : p.theme.colors.gray8};
      `}

    ${HeaderLinkUnderline} {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default HeaderLinkContainer;
