import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../../components/Button';

function ErrorMessage() {
  const navigate = useNavigate();

  const moveToMain = () => {
    // history.push('/');
    navigate('/');
  };

  return (
    <Container>
      <ErrorMessageWrap>
        <h2>Error </h2>
        <Button onClick={moveToMain} width="120" height="40" style={{ fontSize: '14px' }}>
          메인으로 이동
        </Button>
      </ErrorMessageWrap>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: var(--color-gray-50);
  display:flex;
  align-items: center;
  justify-content: center;
`;
const ErrorMessageWrap = styled.div`
  text-align: center;
`;

export default ErrorMessage;
