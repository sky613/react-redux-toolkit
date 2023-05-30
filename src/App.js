import styled from 'styled-components';

import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyle';
import AppLayout from './views/shared/layout/AppLayout';
import NotFound from './views/shared/result/NotFound';

function App() {
  return (
    <div>
      <Container>
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<AppLayout />} />
          <Route path="/:id" element={<AppLayout />} />

          <Route path="*" component={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}
const Container = styled.div`
  // min-width: 1024px;
`;
export default App;
