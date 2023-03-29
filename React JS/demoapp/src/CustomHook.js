import React, { useState, useEffect } from 'react';

const useDocTitleUpdate = (Arg123, Arg1234) => {
    useEffect(() => {
        document.title = Arg123 +"!. but " + Arg1234;
      }
      )
}

// const useDocTitleUpdateARGS = (*Args) => {
//     useEffect(() => {
//         document.title = Arg123 +"!. but " + Arg1234;
//       }
//       )
// }

function CountTitleCustomHook() {
  const [count, setCount] = useState(0);
  var title = 'You have clicked ' + count + ' times'
//   useDocTitleUpdate(title);
  const test = count+10;
//   title = title + '!. but added ' + test
  useDocTitleUpdate(title, test);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default CountTitleCustomHook;