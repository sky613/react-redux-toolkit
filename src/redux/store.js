import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import listMgtReducer from '../views/listMgt/listSearch/redux/slice';
import commonReducer from './commonReducer';
// saga 미들웨어를 생성합니다.
export const sagaMiddleware = createSagaMiddleware();

// createStore대신 configureStore를 사용한다 , 스토어에 mount 합니다.
export const store = configureStore({
  reducer: {
    common: commonReducer, // 리듀서를 묶은 리덕스 모듈 파일
    listMgt: listMgtReducer,
  },
  middleware: [sagaMiddleware], // 사용할 미들웨어들을 나열
});
