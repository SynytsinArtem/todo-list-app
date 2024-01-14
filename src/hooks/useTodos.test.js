import { renderHook, act } from "@testing-library/react";

import useTodos from "./useTodos";

const initialData = [
  { text: "Buy some Apples", isCompleted: true, id: 1 },
  { text: "Buy some Pears", isCompleted: false, id: 2 },
  { text: "Buy some Bananas", isCompleted: false, id: 3 },
];

test("should return initial todos", () => {
  const { result } = renderHook(() => useTodos(initialData));

  expect(result.current.todos).toEqual(initialData);
});

test("should add a todo", () => {
  const { result } = renderHook(() => useTodos());
  const newTodoText = "New todo";

  act(() => {
    result.current.addTodo(newTodoText);
  });

  expect(result.current.todos).toEqual([
    {
      text: newTodoText,
      isCompleted: false,
      id: 1,
    },
  ]);
});

test("should complete a todo", () => {
  const { result } = renderHook(() => useTodos(initialData));

  act(() => {
    result.current.completeTodo(2);
  });

  expect(result.current.todos).toEqual([
    { text: "Buy some Apples", isCompleted: true, id: 1 },
    { text: "Buy some Pears", isCompleted: true, id: 2 },
    { text: "Buy some Bananas", isCompleted: false, id: 3 },
  ]);
});

test("should remove a todo", () => {
  const { result } = renderHook(() => useTodos(initialData));

  act(() => {
    result.current.removeTodo(2);
  });

  expect(result.current.todos).toEqual([
    { text: "Buy some Apples", isCompleted: true, id: 1 },
    { text: "Buy some Bananas", isCompleted: false, id: 3 },
  ]);
});

test("should remove all todos", () => {
  const { result } = renderHook(() => useTodos(initialData));

  act(() => {
    result.current.removeAllTodos();
  });

  expect(result.current.todos).toEqual([]);
});
