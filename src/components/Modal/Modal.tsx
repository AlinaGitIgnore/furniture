import { FC } from 'react';
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
        <div onClick={() => closeModal()}>X</div>
        {children}
        <button onClick={() => loginSubmit()}>Login!</button>
      </div>
    </div>
  );
};

export default Modal;
