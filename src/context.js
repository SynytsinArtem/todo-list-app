import React from "react";
import initialData from "./data";

const Context = React.createContext();

export const AppContextProvider = (props) => {
  const [todos, setTodos] = React.useState(initialData);

  const removeAllTodos = () => {
    setTodos([]);
  };

  const providerValue = {
    todosCount: todos.length,
    actions: { removeAllTodos },
    todos,
  };

  return <Context.Provider value={providerValue}>{props.children}</Context.Provider>;
};
export default Context;
