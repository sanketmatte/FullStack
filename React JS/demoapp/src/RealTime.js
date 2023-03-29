import React, { useRef, useEffect } from 'react';

function RealtimeInput() {
  const inputRef = useRef(null);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      inputRef.current.value = new Date().toLocaleTimeString();
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default RealtimeInput;