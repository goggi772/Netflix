import { useState } from 'react';
import React, { useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
function CardModal({ modal, setModal }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modal == true) {
      document.body.style.overflow = 'hidden';
      modalRef.current.focus();
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [modal]);
  const handleScroll = () => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  };
  if (modal == true) {
    return (
      <div ref={modalRef}>
        <ModalContainer className='scroll'>
          <Modal.Dialog>
            <Modal.Header>
              <Ximg onClick={() => setModal(false)} src='../ximg.png'></Ximg>
            </Modal.Header>
            <Modal.Body>
              <form style={{ display: 'inline' }}>
                <button>ds</button>
                <button>ds</button>
                <button>ds</button>
                <button>ds</button>
                <button>ds</button>
                <button>ds</button>
                <button>ds</button>
                <button>ds</button>
                <button>ds</button>
                <button>ds</button>
                <button>ds</button>
                <button>ds</button>
                <button>ds</button>
                <button>ds</button>
                <button>ds</button>
                <button>ds</button>
                <button>ds</button>
                <button>ds</button>
                <button>ds</button>
                <button>ds</button>

                <button>ds</button>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </ModalContainer>
      </div>
    );
  }
}

export default CardModal;
export const ModalContainer = styled.div`
  top: 10%;
  left: 15%;
  bottom: 0;
  right: 15%;
  background: rgba(0, 0, 0, 1);
  position: fixed;
  z-index: 9999;
  overflow-y: auto; 
  }
`;
export const Ximg = styled.img`
  width: 3%;
  float: right;
  padding-right: 3%;
  padding-top: 2%;
  cursor: pointer;
`;
