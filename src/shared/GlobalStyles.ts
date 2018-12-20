import { normalize } from 'polished';

import { createGlobalStyle } from './styled';
import theme from './theme';

export default createGlobalStyle`
  ${normalize()}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    /* Prevents scrollbar jumping */
    overflow-y: scroll;
  }

  body {
    color: ${(props) => props.theme.colors.text};
    font-size: ${theme.fontSizes[2]}px;
    font-family: ${theme.fonts.serif};
    line-height: 1.58;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    appearance: none;
    background: none;
    border: 0;
  }

  ol, ul {
    padding: 0;
  }

  li + li {
    margin-top: 0.5rem;
  }

  p, ol, ul, blockquote, table, pre, iframe, figure {
    margin-top: 0;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  a {
    color: ${theme.colors.text};
    text-decoration: underline;
    text-decoration-skip: ink;
    text-decoration-color: ${theme.colors.primary};
    transition: 0.1s box-shadow;
    box-shadow: inset 0 -4px 0 ${theme.colors.violet2};
  }

  img {
    max-width: 100%;
  }

  blockquote {
    border-left: 4px solid currentColor;
    padding-left: 1rem;
    margin-left: -1rem;
    font-style: italic;
  }

  iframe {
    border: 0;
  }

  @font-face {
    font-family: 'Regina';
    font-style: normal;
    font-weight: 400;
    src: local('ReginaBlack-Hilite'), url(/fonts/ReginaBlack-Hilite.woff2) format('woff2');
  }
`;
