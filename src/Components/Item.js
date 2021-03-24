import React, { useState, useEffect } from "react";
import EachItem from "./SubComponent/EachItem";
import { useGlobalContext } from "../GlobalContext/Context";
import { ReactSortable } from "react-sortablejs";

const Item = () => {
  const { removeTodo, todos, arrayIndex } = useGlobalContext();
  const [filter, setFilter] = useState(todos);
  const [isFilterMode, setIsFilterMode] = useState(false);

  useEffect(() => {
    setFilter(todos);
  }, [todos]);

  const filterTodo = (status) => {
    if (status === "ALL") {
      setIsFilterMode(false);
      return setFilter(todos);
    } else if (status === "ACTIVE") {
      setIsFilterMode(true);
      const activeTodos = todos.filter((todo) => {
        return todo.isChecked === false;
      });
      return setFilter(activeTodos);
    } else if (status === "COMPLETED") {
      setIsFilterMode(true);
      const completedTodos = todos.filter((todo) => {
        return todo.isChecked === true;
      });
      return setFilter(completedTodos);
    }
  };

  return (
    <div className="app__items__shadow">
      {!isFilterMode && filter.length !== 0 && (
        <ReactSortable
          tag="ul"
          className="app__items"
          list={filter}
          setList={setFilter}
          animation={200}
          onEnd={arrayIndex}
        >
          <EachItem todos={filter} />
        </ReactSortable>
      )}
      {isFilterMode && (
        <ul tag="ul" className="app__items">
          <EachItem todos={filter} />
        </ul>
      )}
      <div className="app__footer">
        <span className="app__footer__left">{`${filter.length} items left`}</span>
        <ul className="app__footer__list">
          <li onClick={() => filterTodo("ALL")}>All</li>
          <li onClick={() => filterTodo("ACTIVE")}>Active</li>
          <li onClick={() => filterTodo("COMPLETED")}>Completed</li>
        </ul>
        <span className="app__footer__clear" onClick={() => removeTodo("ALL")}>
          Clear Completed
        </span>
      </div>
    </div>
  );
};

export default Item;
