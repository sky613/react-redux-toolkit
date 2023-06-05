import {
  all, fork,
} from 'redux-saga/effects';

// import API from '../api';
// import {  } from './commonReducer';

// const getInfoSaga = createPromiseSaga(getInfo, API.Common.getInfo); //타입 , api

/* dispatch type 구독 설정, 종류에 따라 watch함수 분기해도 좋음 */
function* watchCommon() {
  // yield takeLatest(getInfo, getInfoSaga); //타입 , saga //takeLatest: 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업만 수행.
}

/* watch 함수 병합 , commonSaga로 사용 */
export default function* watch() {
  yield all([fork(watchCommon)]);
}
