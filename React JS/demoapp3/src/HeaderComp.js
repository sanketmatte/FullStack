// src/App1.js:

import React from 'react';
import Header from './components/Header';
// import Button from './components/Button';

function HeaderComp() {
  return (
    <div>
      <Header />
      Hii, Change up!!
      {/* <Button>Click me!</Button> */}
      {/* <Button primary>Click me too!</Button> */}
    </div>
  );
}

export default HeaderComp;