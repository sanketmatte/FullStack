// import logo from './logo.svg';
import companyLogo from './companylogo.png'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function View1(){
//   return(
//     <div>
//       <h1>View1</h1>
//     <div>
//       <p>This is the View1</p>
//     </div>
//     </div>
//   );

// }

// const View2 = () => {
//   return (
//     <div>
//     <h1>
//       View 2
//     </h1>
//     <div>
//       Welcome to View2
//     </div></div>
//   )
// }

const Product = (props) => {
  return (
    <div>
    <h1>
      Product Name: {props.name}
    </h1>
    <img src={companyLogo} alt='fractallogo'></img>
    <img src='./logo192.png' alt='directcallinglogo'></img>

    <div>
      Company : <b>{props.company}</b>
      <br></br>
      Price : <b>Rs. {props.price}</b>
      <br></br>
      Offer : <b>{props.offer}% Discount</b>
    </div>
    </div>
  )
}



// export default App;
// export default View1;
export default Product;


