import React, { useState } from "react";

function ToDoItem({ todo, deleteTodo, toggleComplete, startEdit, saveEdit }) {
  const [editText, setEditText] = useState(todo.text);

  return (
    <li className={`todo-item${todo.completed ? " completed" : ""}`}>
      {todo.editing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={() => saveEdit(todo.id, editText)}>Save</button>
        </>
      ) : (
        <>
          <span
            onClick={() => toggleComplete(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => startEdit(todo.id)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;