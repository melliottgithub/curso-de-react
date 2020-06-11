import React, { Fragment, useState } from "react";

const Lists = () => {
  const initialList = [
    { id: 1, text: "task1" },
    { id: 2, text: "task2" },
    { id: 3, text: "task3" },
  ];

  const [list, setList] = useState(initialList);

  return (
    <Fragment>
      <h2>Lists</h2>
      {list.map(({id,text}) => (
        <h4 key={id}>{text}</h4>
      ))}
    </Fragment>
  );
};

export default Lists;
