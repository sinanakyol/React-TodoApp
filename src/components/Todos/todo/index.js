import React from "react";

function Todo({ todos, setTodos, todo }) {
  const isCompleted = () =>
    setTodos(
      todos.map((item) => {
        return item.id === todo.id
          ? { ...item, completed: !item.completed }
          : item;
      })
    );

  const deletedItem = () =>
    setTodos(todos.filter((item) => item.id !== todo.id));

  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={isCompleted}
        />
        <label>{todo.text}</label>
        <button className="destroy" onClick={deletedItem}></button>
      </div>
    </li>
  );
}

export default Todo;
