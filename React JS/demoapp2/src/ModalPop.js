import React from 'react';
import { createPortal } from "react-dom";

const ModalPop = ({ onClose }) => {
    return createPortal(
        <div>
            <h2>Modal PopUp Title</h2>
            <p>Modal PopUp Content</p>
            <button onClick={onClose}>Close Modal PopUp</button>
        </div>,
        document.getElementById('modal-root2')
    );
};

export default ModalPop;