import React from 'react';
import { createPortal } from 'react-dom';
import { CloseModal, ModalContainer, Overlay } from './Modal.styled';
import { MdOutlineClose } from 'react-icons/md';

const Modal = ({ children, onClose, open, mode, notification, option }) =>
  open
    ? createPortal(
        <>
          <ModalContainer
            mode={mode || false}
            notification={notification || false}
            option={option || false}
            >
            <CloseModal
              onClick={onClose}
              mode={mode || false}
              notification={notification || false}
              option={option || false}
            >
              <MdOutlineClose color="black" />
            </CloseModal>
            {children}
          </ModalContainer>
          <Overlay mode={mode || false} onClick={onClose} />
        </>,
        document.body
      )
    : null;

export default Modal;
