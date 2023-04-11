import React from 'react';
import { createPortal } from 'react-dom';
import { CloseModal, ModalContainer, Overlay } from './Modal.styled';
import { MdOutlineClose } from 'react-icons/md';

const Modal = ({ children, onClose, open, mode, notification, option }) =>
  open
    ? createPortal(
        <>
          <ModalContainer
            $mode={mode || false}

            >
            <CloseModal
              onClick={onClose}
              $mode={mode || false}
            >
              <MdOutlineClose color="black" />
            </CloseModal>
            {children}
          </ModalContainer>
          <Overlay $mode={mode} onClick={onClose} />
        </>,
        document.body
      )
    : null;

export default Modal;
