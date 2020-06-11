import React, { Fragment, useState } from "react";

const Lists = () => {
  const initialList = [1, 2, 3, 4, 5];

  const [list, setList] = useState(initialList);

  return (
    <Fragment>
      <h2>Lists</h2>
      {list.map((item,index) => (
        <h4 key={index}>{item}</h4>
      ))}
    </Fragment>
  );
};

export default Lists;
