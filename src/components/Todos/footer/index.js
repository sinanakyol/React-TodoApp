import React from "react";

function Footer({ todos, setTodos, status, setStatus }) {
  const unCompleted = todos.filter((todo) => todo.completed === false);
  const completed = todos.filter((todo) => todo.completed === true);

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  const clickStyle = (e) => {
    setStatus(e.target.id);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{unCompleted.length} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={status === "all" ? "selected" : ""}
            id="all"
            onClick={clickStyle}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={status === "active" ? "selected" : ""}
            id="active"
            onClick={clickStyle}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={status === "completed" ? "selected" : ""}
            id="completed"
            onClick={clickStyle}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        className={completed.length === 0 ? "hidden" : "clear-completed"}
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
