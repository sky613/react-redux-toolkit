/* eslint-disable func-names */
import { useEffect, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import PageTab from '../PageTab';
import Sidebar from '../Sidebar';

import PageContainer from '../viewFrame/PageContainer';

import { usePageTab } from '../PageTab/hooks/usePageTab';

function AppLayout({ location }) {
  const dispatch = useDispatch();
  const { openedPages, headerToggle } = useSelector((state) => ({
    openedPages: state.common.openedPages,
    headerToggle: state.common.headerToggle,
    activePageId: state.common.activePageId,
  }));

  const refViewContents = useRef();

  const { id: locationPageId } = useParams();
  const { openPage } = usePageTab();

  useEffect(() => {
    if (location && location.search !== '') {
      // const query = queryString.parse(location.search);
      const arr = location.search.substr(1).split('&');
      const query = {};
      arr.forEach((item) => {
        const str = item.split('=');
        if (str.length > 1) {
          const [key, value] = str;
          query[key] = value;
        }
      });

      openPage(locationPageId, query);
    } else openPage(locationPageId);
  }, []);

  useLayoutEffect(() => {
  }, []);

  return (
    <AppLayoutWrap>
      <Sidebar />
      <Contents ref={refViewContents}>
        {
          openedPages.map(({ id, query }) => <PageContainer key={id} pageId={id} query={query} />)
        }
      </Contents>
      <PageTab />
    </AppLayoutWrap>
  );
}

const AppLayoutWrap = styled.div`
  min-height: 100%;
`;
const Contents = styled.div`
  flex: 1;
  padding-left: 256px;
  /* background-color: var(--color-lightGray01); */
  background-color: red;

  -webkit-overflow-scrolling: auto;
  overflow-y: auto;
  min-height: calc(100% - 187px);

`;

export default AppLayout;
