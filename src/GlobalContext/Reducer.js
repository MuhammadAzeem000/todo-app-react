export default (state, action) => {
  switch (action.type) {
    case "THEME_TOGGLE": {
      return {
        ...state,
        theme: !state.theme,
      };
    }
    case "REORDER_ARRAY": {
      const originalArray = state.todos;
      const oldIndex = action.payload.oldIndex;
      const newIndex = action.payload.newIndex;
      const movedItem = originalArray.filter(
        (item, index) => index === oldIndex
      );
      const remainingItems = originalArray.filter(
        (item, index) => index !== oldIndex
      );

      const reorderedItems = [
        ...remainingItems.slice(0, newIndex),
        movedItem[0],
        ...remainingItems.slice(newIndex),
      ];
      return {
        ...state,
        todos: reorderedItems,
      };
    }
    case "ADD_TODO": {
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    }
    case "CHECK_TOGGLE": {
      const newTodos = state.todos.map((todo) => {
        if (todo._id === action.payload.id) {
          const newTodo = {
            ...todo,
          };
          newTodo.isChecked = !newTodo.isChecked;
          return newTodo;
        }
        return todo;
      });
      return {
        ...state,
        todos: newTodos,
      };
    }

    case "DELETE_TODO": {
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo._id !== action.payload;
        }),
      };
    }
    case "REMOVE_ALL_TODOS": {
      return {
        ...state,
        todos: [],
      };
    }
    default: {
      return state;
    }
  }
};
