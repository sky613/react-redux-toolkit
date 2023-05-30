import styled from 'styled-components';

import React from 'react';

import NavItem from './NavItem';

function Nav({
  menu, activePageId, onClickMenu, className,
}) {
  return (
    <Container className={className}>
      {
        menu.map(({ id, name, icon, linkUrl, openClose, subMenu, menuLvl }) => (
          <NavItem
            id={id}
            linkUrl={linkUrl}
            key={name}
            name={name}
            icon={icon}
            openClose={openClose}
            subMenu={subMenu}
            menuLvl={menuLvl}
            activePageId={activePageId}
            onClickMenu={onClickMenu}
          />
        ))
      }
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 12px;
`;

export default Nav;
