import React from "react";

const useTodos = (initialData = []) => {
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

  return { todos, addTodo, completeTodo, removeTodo, removeAllTodos }; 
};

export default useTodos;
