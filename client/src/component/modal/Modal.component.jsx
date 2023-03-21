import React from "react";
import { createPortal } from "react-dom";
import { CloseModal, ModalContainer, Overlay } from "./Modal.styled";
import { MdOutlineClose } from "react-icons/md";

const Modal = ({ children, onClose, open, mode }) =>
  open
    ? createPortal(
        <>
          <ModalContainer>
            <CloseModal onClick={onClose}>
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