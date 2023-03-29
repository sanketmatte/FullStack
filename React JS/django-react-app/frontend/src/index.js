// main.js which was before in backend/static/ folder  
//after src/index.js npm init 
//package.json will generate make reqiured changes there
//--> npm install webpack webpack cli 
// const btn = document.getElementById('click')
// btn.addEventListener('click', () => alert('Changes!!!! - You have clicked this button!!!'))

import React from 'react'
import ReactDOM  from 'react-dom'

const App = () => {
    // const [count, setCount] = React.useState(0)
    // const onClick = () => setCount(c => c + 1)
    // return React.createElement('div', null,
    //   React.createElement('h1', null, 'The count is ' + count),
    //   React.createElement('button', { onClick: onClick }, 'Count'),
    // )

    const [count, setCount] = React.useState(0)
    const onClick = () => setCount(c => c + 1)
    return (
        <div>
        <h1>The count is {count}</h1>
        <button onClick={onClick}>Count</button>
        </div>
    )
}

// const root = document.getElementById('app')
// ReactDOM.render(React.createElement(App, null, null), root)

const root = document.getElementById('app')
ReactDOM.render(
<App />, 
root)