
import { useState, useEffect } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Save todos to localStorage on change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const updateTodo = (index, newText) => {
    const updated = [...todos];
    updated[index].text = newText;
    setTodos(updated);
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleComplete,
    updateTodo,
  };
}
