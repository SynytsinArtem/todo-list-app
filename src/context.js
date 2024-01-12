import React from "react";
import initialData from "./data";

const Context = React.createContext();

export const AppContextProvider = (props) => {
  const [todos, setTodos] = React.useState(initialData);

  const addTodo = (text) => {
    const newTodo = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        isCompleted: false,
        text,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const completeTodo = (id) => {
    setTodos((prevTodos) => (
      prevTodos.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)
    ));
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const removeAllTodos = () => {
    setTodos([]);
  };

  const providerValue = {
    todosCount: todos.length,
    actions: { addTodo, completeTodo, removeTodo, removeAllTodos },
    todos,
  };

  return <Context.Provider value={providerValue}>{props.children}</Context.Provider>;
};

export default Context;
