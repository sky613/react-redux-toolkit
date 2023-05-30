import styled from 'styled-components';

import PageTabContainer from './containers/PageTabContainer';

function PageTab() {
  return (
    <Container>
      <PageTabContainer />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 256px;
  right: 0;
  z-index: 999;
  display: flex;
  background-color: #E3E4E7;
`;

export default PageTab;
