import React, { Fragment } from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <Fragment>
      <h1>Contador</h1>
      <h3 onClick>plus: {counter}</h3>
      <button onClick={increment}>increment</button>
    </Fragment>
  );
};

export default Counter;
