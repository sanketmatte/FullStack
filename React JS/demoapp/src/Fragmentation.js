import React from 'react';  

class Table extends React.Component {
    render() {
      return (
        <table>
          <tr>
            <Columns />
          </tr>
        </table>
      );
    }
  }

// class Columns extends React.Component {
//     render() {
//       return (
//         <div>
//           <td>Hello</td>
//           <td>World</td>
//         </div>
//       );
//     }
//   }

class Columns extends React.Component {
    render() {
      return (
        <React.Fragment>
          <td>Hello</td>
          <td>World</td>
        </React.Fragment>
      );
    }
  }

export default Table;