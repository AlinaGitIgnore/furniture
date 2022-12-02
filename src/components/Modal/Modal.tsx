import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styled from './Modal.module.scss';

interface IProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const Modal: FC<IProps> = ({ children, closeModal }) => {
  const loginSubmit = () => {
    closeModal();
    console.log('Login');
  };

  return (
    <div className={styled.backdrop}>
      <div className={styled.modalContent}>
        <div onClick={() => closeModal()} className={styled.closeBtn}>
          <AiOutlineClose />
        </div>
        {children}
        <button onClick={() => loginSubmit()}>Login!</button>
      </div>
    </div>
  );
};

export default Modal;
