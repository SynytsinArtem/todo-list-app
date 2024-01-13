import React from "react";
import initialData from "./data";

const Context = React.createContext();

export const AppContextProvider = (props) => {
  const [todos, setTodos] = React.useState(initialData);

  const addTodo = React.useCallback((text) => {
    setTodos((prevTodos) => {
      const newTodo = {
        id: prevTodos.length > 0 ? prevTodos[prevTodos.length - 1].id + 1 : 1,
        isCompleted: false,
        text,
      };
  
      return [...prevTodos, newTodo]
    });
  }, []);

  const completeTodo = React.useCallback((id) => {
    setTodos((prevTodos) => (
      prevTodos.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)
    ));
  }, []);

  const removeTodo = React.useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const removeAllTodos = React.useCallback(() => {
    setTodos([]);
  }, []);

  const providerValue = {
    todosCount: todos.length,
    actions: { addTodo, completeTodo, removeTodo, removeAllTodos },
    todos,
  };

  return <Context.Provider value={providerValue}>{props.children}</Context.Provider>;
};

export default Context;
