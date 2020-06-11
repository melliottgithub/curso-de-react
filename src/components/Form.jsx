import React, { Fragment, useState } from "react";

const Form = () => {
  const [fruit, setFruit] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Fragment>
      <h2>Form</h2>
      <form action="">
        <input
          type="text"
          name="fruit"
          id="fruit"
          placeholder="Enter fruit"
          className="form-control mb-2"
          onChange={(e) => setFruit(e.target.value)}
        />
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Enter description"
          className="form-control mb-2"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-primary btn-block">Add</button>
      </form>
    </Fragment>
  );
};

export default Form;
