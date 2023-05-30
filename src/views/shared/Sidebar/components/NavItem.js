import cn from 'classnames';
import styled from 'styled-components';

import React, { useEffect, useState } from 'react';

import ArrowToggle from '../../../../components/ArrowToggle';

function NavItem({
  id, name, icon, linkUrl, openClose, subMenu, menuLvl, activePageId, onClickMenu,
}) {
  const [openMenu, setOpenMenu] = useState(true);

  useEffect(() => {
    if (openClose === 'close') {
      setOpenMenu(false);
    }
  }, []);

  useEffect(() => {
    if (subMenu) {
      const arr = subMenu.filter((v) => v.id === activePageId);
      if (arr.length > 0) setOpenMenu(true);
    }
  }, [activePageId]);

  // 메뉴 click
  const toggleMenu = () => {
    // linkUrl 없으면 하위 메뉴 펼침
    if (linkUrl) {
      onClickMenu(id);
    } else {
      setOpenMenu((v) => !v);
    }
  };

  return (
    <Container>
      <Name className={cn({ isActive: !!(linkUrl && id === activePageId), isLink: !subMenu })} menuLvl={menuLvl} onClick={toggleMenu}>
        <span>
          {icon && icon}
        </span>
        {name}

        {
          subMenu
          && <StyledArrowToggle open={openMenu} />
        }
      </Name>

      {
        subMenu && openMenu
        && (
          <>
            {
              subMenu.map((v, idx) => (
                <NavItem
                  key={idx}
                  id={v.id}
                  name={v.name}
                  icon={v.icon}
                  linkUrl={v.linkUrl}
                  openClose={v.openClose}
                  subMenu={v.subMenu}
                  menuLvl={v.menuLvl}
                  activePageId={activePageId}
                  onClickMenu={onClickMenu}
                />
              ))
            }
          </>
        )
      }
    </Container>
  );
}

const Container = styled.div`
`;

const Name = styled.a`
  display: flex;
  align-items: center;
  color: var(--color-gray-500);
  padding-left: ${(props) => props.menuLvl * 20}px !important;
  height: 40px;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  cursor:pointer;
  position: relative;

  span {
    display: flex;
    margin-right: 6px;
  }
  &:hover, &:focus, &:active {
    color: var(--color-gray-500);
  }
  &.isActive {
    font-weight: 700;
    background: linear-gradient(0deg, rgba(17, 17, 17, 0.25), rgba(17, 17, 17, 0.25));
  }
  &.isLink {
    height: 35px;
    color: #fff;
    font-size: 13px;
    font-weight: 400;
    cursor:pointer;
    &:hover ,&:focus, &:active {
      color: #fff;
      background: linear-gradient(0deg, rgba(17, 17, 17, 0.25), rgba(17, 17, 17, 0.25));
    }
  }
`;

const StyledArrowToggle = styled(ArrowToggle)`
  position:absolute;
  left: 214px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

export default NavItem;
