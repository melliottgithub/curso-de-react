import React, { Fragment, useState } from "react";

const Form = () => {
  const [fruit, setFruit] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);

  const saveData = (e) => {
    e.preventDefault();

    if (!fruit.trim()) {
      return;
    }
    if (!description.trim()) {
      return;
    }

    setList([...list, { fruit, description }]);

    e.target.reset();
    setFruit("");
    setDescription("");
  };

  //   const handleChangeFruit = (e) => {
  //     setFruit(e.target.value);
  //   };

  //   const handleChangeDescription = (e) => {
  //     setDescription(e.target.value);
  //   };

  return (
    <Fragment>
      <h2>Form</h2>
      <form onSubmit={saveData}>
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
        <button type="submit" className="btn btn-primary btn-block">
          Add
        </button>
      </form>
      <div>
        {list.map((item, index) => (
          <p key={index}>
            {item.fruit} - {item.description}
          </p>
        ))}
      </div>
    </Fragment>
  );
};

export default Form;
