import { call, put } from 'redux-saga/effects';

export const createPromiseSaga = (type, api) => {
  const success = `${type}Success`;
  const failure = `${type}Failure`;

  return function* saga(action) {
    try {
      const params = action.payload ? action.payload : {};
      const payload = yield call(api, params); // 첫번째인자의 함수 실행 , 두번째인자는 함수에 사용되는 파라미터.
      if (payload && payload?.data && payload?.status === 200) {
        yield put({ type: success, payload: payload.data }); // 특정 액션을 dispatch.
      } else {
        // 에러 처리
        yield put({ type: failure, error: true, payload });
      }
    } catch (err) {
      console.log('catch::');

      if (err?.response?.data) {
        yield put({ type: failure, error: true, payload: err?.response?.data });
      }
    } finally {
      console.log('finally::');
    }
  };
};
