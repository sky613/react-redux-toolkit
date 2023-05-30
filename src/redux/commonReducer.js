import { createSlice } from '@reduxjs/toolkit';

import { pageInfo } from '../constants/pageType';

const initialState = {
  activePageId: 'main',
  openedPages: [{
    id: 'main',
    tab: true,
    name: 'main',
  }],
  userInfo: {},
  headerToggle: false,
  expiredTime: null,
  messageList: [], // { id: number, type: 'alert or confirm', message: 'string', onOk: func() }   alert 및 confirm 공통 객체
};

// 새로운 페이지 data
export const createNewPageData = (id, query) => ({
  id,
  name: pageInfo[id].title,
  tab: pageInfo[id].tab,
  active: true,
  ...(query ? { query } : {}),
});

export const { actions, reducer } = createSlice({
  name: 'common',
  initialState,
  reducers: {
    resetStore: (state) => ({
      ...initialState,
    }),
    updateStore: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    // 페이지 정보 update
    updatePages: (state, { payload }) => {
      state.openedPages = payload;
    },
    setActivePageId: (state, { payload }) => {
      const { id, isSideBar } = payload;
      state.activePageId = id;
      state.resetSettings = isSideBar;
    },
    addMessage: (state, { payload }) => {
      state.messageList = [...state.messageList, payload];
    },
    removeMessage: (state, { payload }) => {
      state.messageList = state.messageList.filter((v) => v.id !== payload);
    },
  },
});

export const {
  updateStore,
  updatePages,
  setActivePageId,
  addMessage,
  removeMessage,

} = actions;

export default reducer;
