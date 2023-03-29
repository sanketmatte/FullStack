import React from 'react'

const Countries = [{
  id : "1",
  Name : "India",
  Currency : "INR"
},{
  id : "2",
  Name : "USA",
  Currency : "USD"
}, {
  id : "3",
  Name : "Japan",
  Currency : "Yen"
}, {
    id : "e",
    Name : "England",
    Currency : "Euro"
  }
]

function FragKey() {
    return (
      <>
      {
        Countries.map(item => (
            <React.Fragment key = {item.id}>
            <h3> Name of the Country is : {item.Name} </h3>
            <h3> Currency is : {item.Currency} </h3>
            </React.Fragment>
        ))
      }
      </>
    );
  }
export default FragKey;