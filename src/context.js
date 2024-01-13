import React from "react";

import useTodos from "./hooks/useTodos";
import initialData from "./data";

const Context = React.createContext();

export const AppContextProvider = (props) => {
  const { todos, addTodo, completeTodo, removeTodo, removeAllTodos } = useTodos(initialData);

  const providerValue = {
    todosCount: todos.length,
    actions: { addTodo, completeTodo, removeTodo, removeAllTodos },
    todos,
  };

  return <Context.Provider value={providerValue}>{props.children}</Context.Provider>;
};

export default Context;
