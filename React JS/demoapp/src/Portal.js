//index.js
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  const modalRoot = document.getElementById('modal-root');
  return ReactDOM.createPortal(children, modalRoot);
};

const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Modal>
        <p>This is a modal dialog box.</p>
      </Modal>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));