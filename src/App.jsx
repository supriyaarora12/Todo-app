import React from "react";
import useTodos from "./hooks/useTodos";
import TodoInput from "./components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  const { todos, addTodo, deleteTodo, toggleComplete, updateTodo } = useTodos();

  return (
    <div className="min-h-screen bg-blue-100 p-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>
        <TodoInput onAdd={addTodo} />
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onToggle={toggleComplete}
          onUpdate={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;