import React, { useState } from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input, completed: false, editing: false },
    ]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, editing: true } : todo
      )
    );
  };

  const saveEdit = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, editing: false } : todo
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="add-todo">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ToDoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        startEdit={startEdit}
        saveEdit={saveEdit}
      />
    </div>
  );
}

export default App;