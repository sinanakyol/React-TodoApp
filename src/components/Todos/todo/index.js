import React from "react";

function Todo({ todos, setTodos }) {
  const isCompleted = (e) =>
    setTodos(
      todos.map((item) => {
        return item.id == e.target.id
          ? { ...item, completed: !item.completed }
          : item;
      })
    );

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={isCompleted}
            />
            <label>{todo.text}</label>
            <button className="destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Todo;
