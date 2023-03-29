import React from 'react';
import ReactDOM from 'react-dom/client';

import CalorieTracker from './CalorieTracker';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    {/* <LineCharts />
    <BarCharts />
    <PieCharts /> */}
    {/* <App /> */}
    {/* <Calculator /> */}
    {/* <Timer /> */}
    <CalorieTracker />
    {/* <ExpTracker /> */}
    {/* <ExpenseTracker /> */}
    {/* <FormValidation /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
