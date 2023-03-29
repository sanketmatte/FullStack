import React, { useState } from 'react';
import ModalPop from './ModalPop';

function PortalPop() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    };

    return (
        <>
        <h1>Portal Pop-Up Example</h1>
        <button onClick={handleClick}>Open Modal PopUp</button>
        {isOpen &&
        <ModalPop onClose={() => setIsOpen(false)} />
        }
        </>
    );
}

export default PortalPop;