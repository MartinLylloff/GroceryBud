import { nanoid } from "nanoid";
import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState({
    name: "",
    completed: false,
    id: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.name) {
      console.log("No empty names");
      toast.error("Name cannot be empty");
      return;
    } else {
      const newTempItem = {
        name: newItem.name,
        completed: false,
        id: nanoid(),
      };
      addItem(newTempItem);
      setNewItem({ name: "", completed: false, id: "" });
    }
  };

  return (
    <div>
      <form className="form-control" onSubmit={handleSubmit}>
        <input
          className="form-input"
          id="item"
          name="item"
          type="text"
          value={newItem.name}
          onChange={(e) => {
            setNewItem({ ...newItem, name: e.target.value });
          }}
        />
        <button type="submit" className="btn">
          Add item
        </button>
      </form>
    </div>
  );
};
export default Form;
