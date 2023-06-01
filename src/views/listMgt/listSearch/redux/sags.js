import {
  all, fork,
  takeLatest,
} from 'redux-saga/effects';

/** 공통 사가 함수 임포트 */
import { createPromiseSaga } from '../../../../redux/lib';

/** slice에서 api call type 선언을 가져와서 정의한다. */
import { getListMgt } from './slice';
/** api call type과 매칭시킬 api 요청 메소드 */
import API from '../../../../api';

/** createPromiseSaga로 api공통 로직 적용 */
const getListMgtSaga = createPromiseSaga(getListMgt, API.ListMgt.getListMgt);

/* api call type과 createPromiseSaga로 생성한 함수를 매칭한다. */
function* watchCommon() {
  yield takeLatest(getListMgt, getListMgtSaga);
}

/* watch 함수 병합 */
export default function* watch() {
  yield all([fork(watchCommon)]);
}
