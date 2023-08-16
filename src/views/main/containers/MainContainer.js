import { useTranslation } from 'react-i18next';

import { confirmMessage } from '../../../components/Message';
import { toastMessage } from '../../../components/ToastMessage';
import i18n from '../../../locales/i18n';

function MainContainer() {
  const { t } = useTranslation();
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

  // 언어 변경하기
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <h1>
        MainContainer
      </h1>
      <b>{t('test')}</b>
      <br />
      <button onClick={() => changeLanguage('ko')}>한국어</button>
      <button onClick={() => changeLanguage('en')}>영어</button>
      <br />

      <button onClick={messageHanlder}>message</button>
      <button onClick={toastMessageHanlder}>toastMessage</button>

    </>
  );
}
export default MainContainer;
