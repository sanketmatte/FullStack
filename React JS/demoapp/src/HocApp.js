import React, { Component } from 'react';
import StockList from './StockList';
import UserList1 from './UserList';
import HocHoc from './HocHoc';

const StocksData = [
  {
      id: 1,
      name: 'TCS'
        
  },
  {
      id: 2,
      name: 'Infosys'
  },
  {
      id: 3,
      name: 'Reliance'
  },
  {
      id: 4,
      name: 'Fractal'
  }
];
const UsersData = [
  {
      id: 1,
      name: 'Krunal'
        
  },
  {
      id: 2,
      name: 'Ankit'
  },
  {
      id: 3,
      name: 'Rushabh'
  }
];

const Stocks = HocHoc(
  StockList,
  StocksData
);

const Users = HocHoc(
  UserList1,
  UsersData
);


class HocApp extends Component {
  
  render() {
    return (
      <div>
        <Stocks></Stocks>
        <Users></Users>
      </div>
    )
  }
}

export default HocApp;