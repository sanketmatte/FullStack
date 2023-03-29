import React from 'react'
function FragCond() {
    const isLogin = true
    return (
      <>
      {
        (isLogin) ? (
          <React.Fragment>
            <h2> Welcome Dear User </h2>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h2> Please Login First </h2>
          </React.Fragment>
        )
      }
      </>
    );
  }
export default FragCond;