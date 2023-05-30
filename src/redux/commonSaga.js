import {
  all, fork,
} from 'redux-saga/effects';

// import { createPromiseSaga } from './lib';

// import API from '../api';
// import {  } from './commonReducer';

// const getHeaderUserInfoSaga = createPromiseSaga(getHeaderUserInfo, API.Common.getHeaderUserInfo);

/* dispatch type 구독 설정, 종류에 따라 watch함수 분기해도 좋음 */
function* watchCommon() {
  // yield takeLatest(getHeaderUserInfo, getHeaderUserInfoSaga);
}

/* watch 함수 병합 , commonSaga로 사용 */
export default function* watch() {
  yield all([fork(watchCommon)]);
}
