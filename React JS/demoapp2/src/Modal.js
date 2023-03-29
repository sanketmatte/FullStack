import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>This is a modal</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;