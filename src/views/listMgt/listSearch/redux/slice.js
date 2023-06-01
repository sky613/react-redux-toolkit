import { createSlice } from '@reduxjs/toolkit';

import { asyncApiState } from '../../../../redux/constants';

const initialState = {
  list: asyncApiState.initial(['1']),
};

export const { actions, reducer } = createSlice({
  name: 'listMgt',
  initialState,
  reducers: {
    resetStore: (store, { payload }) => ({
      ...initialState,
    }),
    updateStore: (store, { payload }) => ({
      ...store,
      ...payload,
    }),
    getListMgt: (store, { payload }) => {
      const result = { ...payload || {} };
      store.list = asyncApiState.request(result);
    },
    getListMgtSuccess: (store, { payload }) => {
      const result = { ...payload || {} };
      store.list = asyncApiState.success(result);
    },
    getListMgtFailure: (store, { payload }) => {
      store.list = asyncApiState.error(payload);
    },

  },
});

export const {
  resetStore,
  updateStore,
  getListMgt,
} = actions;

export default reducer;
