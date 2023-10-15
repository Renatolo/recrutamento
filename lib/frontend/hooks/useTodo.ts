import { useState } from "react";

export function useTodo(initialItems?: string[]) {
  const [todos, setTodos] = useState<string[]>(initialItems || []);

  /* Add your todo methods here */
  const addItem = (newTodoTitle: string, newTodoDesc: string) => {
    setTodos((prevTodos) => [...prevTodos, newTodoTitle + " - " + newTodoDesc]);
  };

  const removeItem = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return {
    todos,
    addTodo: addItem,
    removeTodo: removeItem,
  };
}
