import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import Nav from '../components/Nav';
import Profile from '../components/Profile';

import { usePageTab } from '../../PageTab/hooks/usePageTab';

import { menuIcon } from '../constants';

function SidebarContainer() {
  const { activePageId, userInfo } = useSelector((state) => state.common);
  const [menu, setMenu] = useState([]);

  const { openPage } = usePageTab();

  const selectMenu = (id) => {
    openPage(id, {}, true);
  };

  const openMainPage = () => {
    openPage('main');
  };

  const loopSubMenu = (itemList) => itemList.map((item) => ({
    id: item.linkUrl === null ? item.menuId : item.linkUrl.substr(1),
    name: item.menuNm,
    linkUrl: item.linkUrl,
    menuLvl: item.menuLvl,
    ...(menuIcon[item.menuId] ? { icon: menuIcon[item.menuId] } : {}),
    ...(item.linkUrl === null ? { openClose: ['MN0001'].indexOf(item.menuId) > -1 ? 'open' : 'close' } : {}),
    ...(item.subMenu && item.subMenu.length > 0 ? { subMenu: loopSubMenu(item.subMenu) } : {}),
  }));

  const createMenu = (menuList) => {
    let arr = [];

    menuList.forEach((item) => {
      arr = arr.concat(loopSubMenu([item]));
    });
    setMenu(arr);
  };

  useEffect(() => {
    createMenu([
      {
        menuId: 'MN0000',
        menuLvl: 1,
        upperMenuId: null,
        menuNm: ' main',
        linkUrl: '/',
      },
      {
        menuId: 'MN0001',
        menuLvl: 1,
        upperMenuId: null,
        menuNm: 'memberMgt',
        linkUrl: null,
        subMenu: [
          {
            menuId: 'MN0011',
            menuLvl: 2,
            upperMenuId: 'MN0001',
            menuNm: 'partner',
            linkUrl: '/partner',
            subMenu: [],
          },
          {
            menuId: 'MN0012',
            menuLvl: 2,
            upperMenuId: 'MN0001',
            menuNm: 'admin',
            linkUrl: '/admin',
            subMenu: [],
          },
        ],
      },
      {
        menuId: 'MN0002',
        menuLvl: 1,
        upperMenuId: null,
        menuNm: 'listMgt',
        linkUrl: null,
        subMenu: [
          {
            menuId: 'MN0021',
            menuLvl: 2,
            upperMenuId: 'MN0002',
            menuNm: 'listSearch',
            linkUrl: '/listSearch',
            subMenu: [],
          },
        ],
      },
    ]);
  }, [userInfo]);

  return (
    <Container>
      <Profile />
      <Nav
        menu={menu}
        openMainPage={openMainPage}
        activePageId={activePageId}
        onClickMenu={selectMenu}
      />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export default SidebarContainer;
