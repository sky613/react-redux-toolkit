import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ErrorMessage from './ErrorMessage';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    // history.replace('/result/notFound');
    navigate('/result/notFound', { replace: true });
  }, []);

  return (
    <Container>
      <ErrorMessage />
    </Container>
  );
}

const Container = styled.div`
`;

export default NotFound;
