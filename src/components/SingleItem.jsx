import { useState } from "react";

const SingleItem = ({ id, name, completed, removeItem, editItem }) => {
  const handleCompletion = () => {
    editItem(id);
  };

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          editItem(id);
        }}
      />
      <p
        style={{
          textDecoration: completed && "line-through",
          textTransform: "capitalize",
        }}
      >
        {name}
      </p>
      <button
        onClick={() => {
          removeItem(id);
        }}
        className="btn remove-btn"
      >
        Delete
      </button>
    </div>
  );
};
export default SingleItem;
