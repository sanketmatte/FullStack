import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Calculator from './Calculator';
// import Timer from './Timer';
// import App from './App';
// import FormValidation from './FormValidation';
// import CalorieTracker from './CalorieTracker';
// import Recharts from './Recharts';
// import LineCharts from './LineCharts';
// import BarCharts from './BarCharts';
// import PieCharts from './PieChart';
// import ExpTracker from './expensetrack';
import ExpenseTracker from './exptrackerchart';
// import ExpenseTracker from './ExpenseTracker';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <LineCharts />
    <BarCharts />
    <PieCharts /> */}
    {/* <App /> */}
    {/* <Calculator /> */}
    {/* <Timer /> */}
    {/* <CalorieTracker /> */}
    {/* <ExpTracker /> */}
    <ExpenseTracker />
    {/* <FormValidation /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
