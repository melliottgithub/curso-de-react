import React, { Fragment } from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <Fragment>
      <h1>Counter</h1>
      <h3 onClick>kisses: {counter}</h3>
      <button onClick={increment}>increment</button>
      <h4>you cook? {counter > 2 ? "Yes" : "No"}</h4>
    </Fragment>
  );
};

export default Counter;
