import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// class Square extends React.Component {
//   // constructor(props){
//   //   super(props);
//   //   this.state = {
//   //     value : null,
//   //   };
//   // }
//   render() {
//     return (
//       // <button className="square" onClick={() => this.setState({value : 'X'})}>
//       // {
//       //   /* TODO */this.state.value
//       // }
//       <button className="square" onClick={() => this.props.onClick()}>
//         {
//           /* TODO */this.props.value
//         }
//       </button>
//     );
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// function Winner(props){
//   pass
// }
function Winner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares : Array(9).fill(null),
      isXNext : true,
      gamestat : 'First Player O'
    };
  }
  setSquareState(i){
    const squr = this.state.squares.slice();
    const winner = Winner(squr);
    let status;
    if(squr[i] || winner){
      return;
    }
    squr[i] = !this.state.isXNext ? 'X' : 'O'
    if (winner){
      status = 'The Winner is: '+winner;
    }
    else{
      status = 'Next player: '+ (this.state.isXNext ? 'X':'O');
    }
    this.setState({
      squares : squr,
      isXNext : !this.state.isXNext,
      gamestat : status
    })
  }
  renderSquare(i) {
    return <Square value = {this.state.squares[i]}
                            onClick={() => this.setSquareState(i)}/>;
  }

  render() {
    // const winner = Winner(this.state.squares);
    // let status;
    // if (winner){
    //   status = 'The Winner is: '+winner;
    // }
    // else{
    //   status = 'Next player: '+ (this.state.isXNext ? 'X':'O');
    // }
    return (
      <div>
        <div className="status">{this.state.gamestat}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
