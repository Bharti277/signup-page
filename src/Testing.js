import React, { useState } from "react";

function Testing() {
  const [list, setList] = useState(["Avatar", "Thor", "Avengers"]);
  const [name, setName] = useState("");

  const deleteItems = (index) => {
    let updatedElements = [...list];
    updatedElements.splice(index, 1);
    setList(updatedElements);
  };

  const addItems = () => {
    setList([...list, name]);
    setName("");
  };
  return (
    <div>
      {list.map((li, i) => {
        return (
          <div className="list__items" key={i}>
            {li}
            <span onClick={() => deleteItems(i)}>Delete</span>
          </div>
        );
      })}
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={addItems}>Add Items</button>
    </div>
  );
}

export default Testing;
