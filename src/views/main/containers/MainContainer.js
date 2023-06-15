import { confirmMessage } from '../../../components/Message';
import { toastMessage } from '../../../components/ToastMessage';

function MainContainer() {
  const messageHanlder = () => {
    console.log('messageHanlder');

    confirmMessage('msgContent', () => {
      console.log('확인');
    });
  };
  const toastMessageHanlder = () => {
    console.log('toastMessageHanlder');
    toastMessage('toatMsg');
  };
  return (
    <>
      <h1>
        MainContainer
      </h1>
      <button onClick={messageHanlder}>message</button>
      <button onClick={toastMessageHanlder}>toastMessage</button>

    </>
  );
}
export default MainContainer;
