import styled from 'styled-components';

import { usePageTab } from '../hooks/usePageTab';

function PageLink({ children, to }) {
  const { openPage } = usePageTab();
  const handleClick = () => {
    openPage(to);
  };
  return (
    <Container onClick={handleClick}>
      {children}
    </Container>
  );
}

const Container = styled.a``;

export default PageLink;
