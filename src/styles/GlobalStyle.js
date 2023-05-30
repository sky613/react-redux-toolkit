import { createGlobalStyle } from 'styled-components';

import { COLORS } from './Colors';

export const GlobalStyle = createGlobalStyle`
  html:not(.style-scope) {

    --color-white: ${COLORS.WHITE};
    --color-black: ${COLORS.BLACK};
    --color-blueGray: ${COLORS.BLUE_GRAY};

    /* 
    * Semantic color 
    */
    --background-default: ${COLORS.BLUE[50]};
    --background-sidebar: ${COLORS.BLUE[800]};
    --background-sidebar-profile: ${COLORS.BLUE[700]};
    --border-default: 1px solid ${COLORS.BLUE[200]};
    --size-sidebar-width: 256px;
    --font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    --header-time: .5s ease-in-out;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: var(--font-body);
    font-family: var(--font-family);
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html, body {
    -webkit-overflow-scrolling: auto;
    overscroll-behavior-y: none;
    width: 100%;
    height: 100%;
  }
  body {
    line-height: 1.4;
    -webkit-text-size-adjust : none;
    background-color:var(--background-default);
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    vertical-align: top;
    max-width: 100%;
  }
  
  a {
    text-decoration: none;
    color: red;
  }
  .ant-dropdown {
    z-index: 9999;
  }

  .ant-modal-wrap {
    z-index: 9999;
  }

`;
