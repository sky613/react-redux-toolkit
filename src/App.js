import styled from 'styled-components';

import { Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Message from './components/Message';
import ToastMessage from './components/ToastMessage';
import { GlobalStyle } from './styles/GlobalStyle';
import AppLayout from './views/shared/layout/AppLayout';
import NotFound from './views/shared/result/NotFound';

function App() {
  const { userInfo, messageList, toastMessageList } = useSelector((state) => state.common);

  return (
    <div>
      <Container>
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<AppLayout />} />
          <Route path="/:id" element={<AppLayout />} />

          <Route path="*" component={<NotFound />} />
        </Routes>
        {
          messageList.map((v, index) => (
            <Message id={v.id} key={index} type={v.type} message={v.message} onOk={v.onOk} okText={v.okText} cancelText={v.cancelText} onCancel={v.onCancel} />
          ))
        }
        {
          toastMessageList.map((v, index) => (
            <ToastMessage key={index} />
          ))
        }
      </Container>
    </div>
  );
}
const Container = styled.div`
  // min-width: 1024px;
`;
export default App;
