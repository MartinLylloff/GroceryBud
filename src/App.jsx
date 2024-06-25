import { useEffect, useState } from "react";
import Form from "./components/Form";
import Items from "./components/Items";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const getLocalStorage = () => {
  let defaultList = JSON.parse(localStorage.getItem("list") || "[]");
  return defaultList;
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage());

  const addItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success(`${item.name} has been added`);
  };

  const removeItem = (id) => {
    if (id) {
      const newItems = items.filter((item) => item.id !== id);
      setItems(newItems);
      setLocalStorage(newItems);
      toast.success(`Item has been removed`);
    } else {
      toast.error("Something went wrong");
      return;
    }
  };

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      } else {
        return item;
      }
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <div className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer position="top-center" />
    </div>
  );
};

export default App;
