import { createContext, useContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = {
  todos: [],
  theme: true,
};

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const themeToggle = () => {
    dispatch({
      type: "THEME_TOGGLE",
    });
  };

  const checkBtn = (id) => {
    dispatch({
      type: "CHECK_TOGGLE",
      payload: { id },
    });
  };

  const addTodo = (todo) => {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  };

  const removeTodo = (status, id) => {
    if (status === "ALL") {
      dispatch({
        type: "REMOVE_ALL_TODOS",
      });
    } else if (status === "EACH") {
      dispatch({
        type: "DELETE_TODO",
        payload: id,
      });
    }
  };

  const arrayIndex = (evt) => {
    dispatch({
      type: "REORDER_ARRAY",
      payload: { oldIndex: evt.oldIndex, newIndex: evt.newIndex },
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        themeState: state.theme,
        addTodo,
        removeTodo,
        themeToggle,
        checkBtn,
        arrayIndex,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
