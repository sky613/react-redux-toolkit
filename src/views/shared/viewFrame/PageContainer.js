import { useRef } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import cn from 'classnames';

import { PageComponents } from './PageComponents';

function PageContainer({ pageId, query }) {
  const activePage = useRef();
  // 활성화된 탭
  const { activePageId } = useSelector((state) => ({
    activePageId: state.common.activePageId,

  }));
  const PageComponent = PageComponents[pageId];

  return (
    <Container ref={activePage} className={cn({ isActivePage: activePageId === pageId, isMain: pageId === 'main' })}>

      <PageComponent query={query} isActivePage={activePageId === pageId} />
    </Container>
  );
}

const Container = styled.div`
  display: none;
  background-color: var(--background-default);
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: none;
  min-height: calc(100% - 187px);
  &.isActivePage {
    display: block;
    z-index: 99;
  }
  &.isMain .footer {
    background: #fff;
  }
`;

export default PageContainer;
