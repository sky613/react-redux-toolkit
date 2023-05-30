import styled from 'styled-components';

import SidebarContainer from './containers/SidebarContainer';

function Sidebar({ className }) {
  return (
    <Container className={className}>
      <SidebarContainer />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 200;
  width: var(--size-sidebar-width);
  background: var(--background-sidebar);
  overflow-x:hidden;
  overflow-y:hidden;
  transition: var(--header-time);
  transition-delay: 0s;
  overflow-y: auto;
  &.headerVisible {
    top: 60px;
  }
  &::-webkit-scrollbar{ 
    width: 6px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: rgba(248,249,251,0.5); 
  }
  &::-webkit-scrollbar-track{ 
    background-color: rgba(227,228,231,0);
  }
`;

export default Sidebar;
