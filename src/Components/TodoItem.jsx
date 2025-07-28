import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function TodoItem({ todo, index, onDelete, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    onUpdate(index, newText);
    setIsEditing(false);
  };

  return (
    <li
      className={`flex items-center justify-between p-2 border rounded shadow-sm ${
        todo.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(index)}
        />
        {isEditing ? (
          <input
            className="border p-1"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleUpdate}
            autoFocus
          />
        ) : (
          <span
            className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : "text-black"}`}
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="space-x-2">
        <button onClick={() => setIsEditing(true)} className="text-yellow-500">
          <FaEdit />
        </button>
        <button onClick={() => onDelete(index)} className="text-red-500">
          <FaTrash />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
