import { jsonParse } from './jsonParse';
// 세션에 펼쳐진 메뉴 가져오기
export const loadOpenedPages = () => jsonParse(window.sessionStorage.getItem('openedPages'));
// 세션에 펼쳐진 메뉴 저장
export const saveOpenedPages = (pages) => window.sessionStorage.setItem('openedPages', JSON.stringify(pages));
