import React, { useState } from "react";

import { useGlobalContext } from "../GlobalContext/Context";

function Form() {
  const { addTodo } = useGlobalContext();
  const [form, setForm] = useState({
    text: "",
    isChecked: false,
  });

  const handler = (e) => {
    e.preventDefault();
    if (form.text.trim() !== "") {
      const newTodo = {
        _id: Math.floor(Math.random() * 100),
        ...form,
      };
      addTodo(newTodo);
      setForm({ ...form, text: "", isChecked: false });
    } else {
      alert("Please fill the text field");
    }
  };
  return (
    <form className="app__form" onSubmit={handler}>
      <label className="app__item__icon">
        <input type="checkbox" />
        <div className="checkmark">
          <div></div>
        </div>
      </label>
      <input
        type="text"
        placeholder="Add Your Todo's Here..."
        className="app__form__input"
        value={form.text}
        onChange={(e) => {
          setForm({ ...form, text: e.target.value });
        }}
      />
    </form>
  );
}

export default Form;
