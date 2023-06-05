import { all, fork } from 'redux-saga/effects';

import listMgtSaga from '../views/listMgt/listSearch/redux/sags';
import commonSaga from './commonSaga';

export default function* rootSaga() {
  // [es6] yield : 순차적으로 실행
// all : 함수를 사용해서 제너레이터 함수를 배열의 형태로 인자로 넣어주면, 제너레이터 함수들이 병행적으로 동시에 실행되고, 전부 resolve될때까지 기다림.
  // fork :  비동기이기 때문에 요청 보내버리고 결과와 상관없이 바로 다음것이 실행됨.
  yield all([
    fork(commonSaga),
    fork(listMgtSaga),
  ]);
}
