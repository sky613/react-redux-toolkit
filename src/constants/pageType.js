import { values } from 'lodash';

// 페이지 타입
export const PageTypes = {
  MAIN: 'main',
  PARTNER: 'partner',
  ADMIN: 'admin',
  LISTSEARCH: 'listSearch',
};

// 페이지 정보
export const pageInfo = {
  [PageTypes.MAIN]: {
    title: 'main',
    tab: true,
  },
  [PageTypes.PARTNER]: {
    title: 'partner',
    tab: true,
  },
  [PageTypes.ADMIN]: {
    title: 'admin',
    tab: true,
  },
  [PageTypes.LISTSEARCH]: {
    title: 'listSearch',
    tab: true,
  },
};
// 현재 페이지 정보를 알 수 있는
export const isPageId = (id) => values(PageTypes).includes(id);
