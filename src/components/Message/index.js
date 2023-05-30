import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Button from '../Button';

import { addMessage, removeMessage } from '../../redux/commonReducer';
import { store } from '../../redux/store';

let messageId = 0;

export const alertMessage = (message, onOk = null, okText = null) => {
  store.dispatch(addMessage({ id: messageId, message, type: 'alert', ...(onOk ? { onOk } : {}), ...(okText ? { okText } : {}) }));
  messageId += 1;
};

export const confirmMessage = (message, onOk = null, okText = null, cancelText = null, onCancel = null) => {
  store.dispatch(
    addMessage({
      id: messageId,
      message,
      type: 'confirm',
      ...(onOk ? { onOk } : {}),
      ...(okText ? { okText } : {}),
      ...(cancelText ? { cancelText } : {}),
      ...(onCancel ? { onCancel } : {}),
    }),
  );
  messageId += 1;
};

function Message({ id, type = 'alert', message, onOk, okText = '확인', cancelText = '취소', onCancel }) {
  const dispatch = useDispatch();
  const okRef = useRef(null);
  const cancelRef = useRef(null);
  const messageBox = useRef();

  const onClickOkBtn = (e) => {
    dispatch(removeMessage(id));
    if (onOk) onOk();
  };

  const onClickCancelBtn = (e) => {
    dispatch(removeMessage(id));
    if (onCancel) onCancel();
  };

  const onClickBack = (e) => {
    onClickCancelBtn();
    // alert 일때만 onOk를 호출함.
    if (type === 'alert') {
      if (onOk) onOk();
    }
  };

  const onKeyDownBack = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      if (cancelRef && document.activeElement === okRef.current) {
        cancelRef.current.focus();
      } else {
        okRef.current.focus();
      }
    }
  };

  useEffect(() => {
    okRef.current.focus();
  }, []);
  return (
    <>
      <Container tabIndex="0" onKeyDown={onKeyDownBack} onClick={onClickBack}>
        <MessageBackground ref={messageBox}>
          <TextWrap>{message}</TextWrap>
          <ButtonWrap>
            {
              type === 'alert' ? (
                <>
                  <Button width="140" height="40" type="fillBlue" buttonRef={okRef} onClick={() => onClickOkBtn()}>{okText}</Button>
                </>
              ) : (
                <>
                  <CancelButton width="140" height="40" buttonRef={cancelRef} onClick={() => onClickCancelBtn()}>{cancelText}</CancelButton>
                  <Button width="140" height="40" type="fillBlue" buttonRef={okRef} onClick={() => onClickOkBtn()}>{okText}</Button>
                </>
              )
            }
          </ButtonWrap>
        </MessageBackground>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 10000;
  display:flex;
  align-items: center;
  justify-content: center;;
`;

const MessageBackground = styled.div`
  width: 360px;
  padding: 30px 20px 20px;
  background:var(--color-white);
  box-shadow: 0px 14px 12px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const TextWrap = styled.span`
  display: inline-block;
  width: 100%;
  font-size: 13px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 30px;
  white-space: pre-line;
  text-align: center;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const CancelButton = styled(Button)`
  margin-right: 10px;
`;

export default Message;
