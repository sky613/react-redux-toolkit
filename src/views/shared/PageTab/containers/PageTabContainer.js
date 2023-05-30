import { useSelector } from 'react-redux';

import { useEffect } from 'react';

import PageTabList from '../components/PageTabList';
import { usePageTab } from '../hooks/usePageTab';

function PageTabContainer() {
  const { openedPages, activePageId } = useSelector((state) => ({
    openedPages: state.common.openedPages,
    activePageId: state.common.activePageId,
  }));

  const {
    closePage, openPage, initializeOpenedPages, reloadAllPage,
  } = usePageTab();

  const selectPage = (id) => {
    openPage(id);
  };

  useEffect(() => {
    initializeOpenedPages();
  }, []);

  // 페이지 벗어날때 발생
  window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    reloadAllPage();
  });

  return (
    <PageTabList
      data={openedPages.filter((v) => v.tab === true)}
      activePageId={activePageId}
      selectPage={selectPage}
      closePage={closePage}
    />
  );
}

export default PageTabContainer;
