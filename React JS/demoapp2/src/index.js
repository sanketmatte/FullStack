import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import PortalApp from './PortalApp';
// import App from './Portal';
// import PortalPop from './PortalPop';
// import ErrorApp from './ErrorApp';
// import ErrorApp2 from './ErrorApp2';
import RenderPropsApp from './RenderPropsApp';
import RenderPropsApp2 from './RenderPropsApp2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RenderPropsApp />
    <RenderPropsApp2 />
    {/* <ErrorApp />
    <ErrorApp2 /> */}
    {/* <PortalPop /> */}
    {/* <PortalApp /> */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



