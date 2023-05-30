import styled from 'styled-components';

import TabItem from './TabItem';

function PageTabList({
  data, activePageId, selectPage, closePage,
}) {
  const tabMenuExceptMain = data.slice(0);

  return (
    <Container className="pageTabList">
      {
        tabMenuExceptMain.map(({ name, id }) => (
          <TabItem
            key={id}
            id={id}
            name={name}
            selectPage={selectPage}
            activePageId={activePageId}
            closePage={closePage}
          />
        ))
      }
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  max-width: calc(100%);
`;

export default PageTabList;
