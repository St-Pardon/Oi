import React from 'react';
import { createPortal } from 'react-dom';
import { CloseModal, ModalContainer, Overlay } from './Modal.styled';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Modal = ({ children, onClose, open, mode }) => {
  const navigate = useNavigate();
  return open
    ? createPortal(
        <>
          <ModalContainer $mode={mode}>
            <CloseModal onClick={onClose} $mode={mode}>
              <MdOutlineClose color="black" />
            </CloseModal>
            {children}
          </ModalContainer>
          <Overlay
            $mode={mode}
            onClick={mode === 'profile' ? ()=> navigate(-1) : onClose}
          />
        </>,
        document.body
      )
    : null;
};

export default Modal;
