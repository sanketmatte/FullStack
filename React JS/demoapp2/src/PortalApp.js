
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

const PortalApp = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <h1>My App</h1>
      <button onClick={toggleModal}>Show Modal</button>
      {showModal &&
        ReactDOM.createPortal(
          <Modal onClose={toggleModal} />,
          document.getElementById('modal-root')
        )}
    </div>
  );
};

export default PortalApp;