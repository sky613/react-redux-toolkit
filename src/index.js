import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider } from 'antd';
import koKR from 'antd/lib/locale/ko_KR';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { sagaMiddleware, store } from './redux/store';

import 'moment/locale/ko';
import App from './App';
import rootSaga from './redux/saga';

// saga 실행
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* BrowserRouter: HTML5의 history API를 활용하여 UI를 업데이 */}
    <Provider store={store}>
      {/* Provider : store 를 손쉽게 연동 */}
      <ConfigProvider locale={koKR}>
        <App />
      </ConfigProvider>
    </Provider>
  </BrowserRouter>,
);
