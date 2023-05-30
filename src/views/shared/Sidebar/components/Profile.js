import styled from 'styled-components';

import React from 'react';

function Profile({ className }) {
  return (
    <Container className={className}>
      Profile
    </Container>
  );
}

const Container = styled.div`
  background: var(--background-sidebar-profile);
`;

export default Profile;
