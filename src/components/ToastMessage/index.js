import { message } from 'antd';

import { useEffect } from 'react';

import { addToastMessage } from '../../redux/commonReducer';
import { store } from '../../redux/store';

let toastMessageId = 0;

export const toastMessage = (msg, onOk = null, okText = null) => {
  console.log('12312312');
  store.dispatch(addToastMessage({ id: toastMessageId, msg }));
  toastMessageId += 1;
};

function ToastMessage() {
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    messageApi.open({
      type: 'error',
      content: 'This is a prompt message with custom className and style',
      className: 'custom-class',
      // style: {
      //   marginTop: '20vh',
      // },
    });
  }, []);

  return (
    <>
      {contextHolder}
    </>
  );
}

export default ToastMessage;
