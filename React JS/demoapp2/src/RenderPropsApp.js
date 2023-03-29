import React from 'react';
import RenderPropsComp from './RenderPropsComp';

const RenderPropsApp = () => {
  return (
    <div>
      <RenderPropsComp
        render={(count, handleClick) => (
          <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment Count</button>
          </div>
        )}
      />
    </div>
  );
};

export default RenderPropsApp;