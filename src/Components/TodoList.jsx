import React from "react";
import TodoItem from "./TodoItem";


function TodoList({ todos, onDelete, onToggle, onUpdate }) {
  return (
    <ul className="space-y-2">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          onDelete={onDelete}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}

export default TodoList;