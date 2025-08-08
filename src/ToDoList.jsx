import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, deleteTodo, toggleComplete, startEdit, saveEdit }) {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          startEdit={startEdit}
          saveEdit={saveEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;