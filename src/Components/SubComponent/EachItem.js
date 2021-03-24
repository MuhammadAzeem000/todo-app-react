import React from "react";
import { useGlobalContext } from "../../GlobalContext/Context";

function EachItem({ todos }) {
  const { removeTodo, checkBtn } = useGlobalContext();

  return todos.map((todo) => {
    const { _id, text, isChecked } = todo;
    return (
      <li className="app__item" key={_id}>
        <label className="app__item__icon">
          <input
            type="checkbox"
            onClick={() => checkBtn(_id)}
            defaultChecked={isChecked}
          />
          <div className="checkmark">
            <div></div>
          </div>
        </label>
        <p className={`app__item__text ${isChecked && " cut"}`}>{text}</p>
        <div
          className="app__item__close"
          onClick={() => removeTodo("EACH", _id)}
        ></div>
      </li>
    );
  });
}

export default EachItem;
