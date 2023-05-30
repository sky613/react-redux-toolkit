import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isArray } from 'lodash';
import { useLocation, useNavigate } from 'react-router-dom';

import { alertMessage } from '../../../../components/Message';

import { isPageId } from '../../../../constants/pageType';
import {
  createNewPageData,
  setActivePageId,
  updatePages,
} from '../../../../redux/commonReducer';
import {
  loadOpenedPages,
  saveOpenedPages,
} from '../../../../utils/pageSessionStorage';

// 선택 화면 오픈
export const usePageTab = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const maxOpendPages = 10;

  const { openedPages, activePageId } = useSelector((state) => ({
    openedPages: state.common.openedPages,
    activePageId: state.common.activePageId,
  }));

  // 펼쳐진 메뉴로 초기화
  const initializeOpenedPages = () => {
    // 세션에서 펼쳐진 메뉴 get
    const prevOpenedPages = loadOpenedPages();
    // 기존의 openedPages sessionData 가 존재 하지 않거나 올바르지 않을 경우 defaultPages 를 저장한다.
    if (
      !prevOpenedPages
      || !isArray(prevOpenedPages)
      || prevOpenedPages[0].id !== 'main'
    ) {
      saveOpenedPages(openedPages.filter((v) => v.id !== ''));
      return;
    }

    // 기존의 sessionData 가 존재 할 경우 store update
    dispatch(updatePages(prevOpenedPages.filter((v) => v.id !== '')));
  };

  const updateNextPages = (nextOpenedPages) => {
    dispatch(updatePages(nextOpenedPages.filter((v) => v.id !== '')));
    saveOpenedPages(nextOpenedPages.filter((v) => v.id !== ''));
  };

  const activePage = (id, isSideBar = false) => {
    dispatch(setActivePageId({ id, isSideBar }));
    const prevOpenedPages = loadOpenedPages();
    saveOpenedPages(
      prevOpenedPages.map((v) => (v.id === id
        ? { ...v, active: true, ...(v.query ? { query: v.query } : {}) }
        : { ...v, active: false, ...(v.query ? { query: v.query } : {}) })),
    );
    // history.push(id ? `/${id}` : '/');
    navigate(id ? `/${id}` : '/');
  };

  const openPage = (id, query = null, isSideBar = false) => {
    // pageId를 입력하지 않을 경우 메인으로 이동
    if (!id) {
      activePage('main', isSideBar);
      return;
    }

    // pageId가 아닌경우 404페이지 이동;
    if (id && !isPageId(id)) {
      // history.replace('/result/notFound');
      navigate('/result/notFound', { replace: true });

      const nextOpenedPages = openedPages.filter((p) => p.id !== id);
      updateNextPages(nextOpenedPages);
      return;
    }

    const opendPagesActive = openedPages.some((p) => p.id === id);
    if (openedPages.length > maxOpendPages && !opendPagesActive) {
      alertMessage(`
        메뉴는 최대 10개 까지 사용 가능합니다.
        다른 창을 종료후 사용해 주세요.`);
      return;
    }

    const prevOpenedPages = loadOpenedPages();
    // 시스템관리, 마이페이지 선택시 재오픈
    // pageTab active
    if (id === activePageId) return;

    // 이미 열려있는 페이지라면 return;
    activePage(id, isSideBar);

    // query가 있는 경우엔 기존 쿼리와 동일한지 검사 후 쿼리가 다르다면 삭제후 재오픈
    const findOpendByIdArr = prevOpenedPages.filter((v) => v.id === id);
    if (query && Object.keys(query).length) {
      if (findOpendByIdArr.length > 0) {
        if (
          JSON.stringify(
            findOpendByIdArr[0].query ? findOpendByIdArr[0].query : {},
          ) !== JSON.stringify(query)
        ) {
          prevOpenedPages.splice(
            prevOpenedPages.findIndex((value) => value.id === id),
            1,
          );
        } else {
          return;
        }
      }
    } else if (findOpendByIdArr.length > 0) return;
    setOpenNewPage(id, prevOpenedPages, query);
  };

  // 새로운 페이지라면 생성하여 업데이트
  const setOpenNewPage = (id, prevOpenedPages, query = null) => {
    const newPage = createNewPageData(id, query);
    const nextOpenedPages = [...prevOpenedPages, newPage];
    updateNextPages(nextOpenedPages);
  };

  const setNextActivePage = (id) => {
    if (id !== activePageId) return;
    const selectedIndex = openedPages.map((p) => p.id).indexOf(id);
    const prevTab = openedPages[selectedIndex - 1];
    const nextTab = openedPages[selectedIndex + 1];
    const nextCurrentId = nextTab?.id || prevTab?.id;
    activePage(nextCurrentId || 'main');
  };

  const closePage = (id) => {
    if (id === 'main') return;
    const nextOpenedPages = openedPages.filter((p) => p.id !== id);

    updateNextPages(nextOpenedPages);
    setNextActivePage(id);
  };

  const openPagesMain = [
    {
      id: 'main',
      tab: true,
      name: 'main',
    },
  ];

  const closeAllPage = () => {
    updateNextPages(openPagesMain);
    openPage('main');
  };

  const reloadAllPage = () => {
    if (activePageId !== 'main') {
      const nowPage = openedPages.filter((p) => p.id === activePageId);
      setOpenNewPage(
        activePageId,
        openPagesMain,
        nowPage.length ? nowPage[0].query : null,
      );
    }
  };

  // 뒤로가기 & 앞으로 가기 감지
  useEffect(() => {
    // if (history.action !== 'POP') return;
    const prevHistory = location.pathname.slice(1);
    if (isPageId(prevHistory)) {
      dispatch(setActivePageId({ id: prevHistory, isSideBar: false }));
      const prevOpenedPages = loadOpenedPages();
      const openedPageIds = prevOpenedPages.some((p) => p.id === prevHistory);
      if (!openedPageIds) {
        setOpenNewPage(prevHistory, prevOpenedPages);
      }
    }
  }, [location]);

  return {
    openPage,
    closePage,
    closeAllPage,
    reloadAllPage,
    initializeOpenedPages,
  };
};
