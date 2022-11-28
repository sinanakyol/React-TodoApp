import { useState } from "react";
import { useEffect } from "react";
import Form from "./form";
import Todo from "./todo";

function Todos() {
  const [todos, setTodos] = useState([
    {
      completed: true,
      text: "Learn JavaScript",
      id: 1,
    },
    {
      completed: false,
      text: "Learn React",
      id: 2,
    },
    {
      completed: false,
      text: "Have a life!",
      id: 3,
    },
  ]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <Form todos={todos} setTodos={setTodos} />
      </header>

      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <Todo todos={todos} setTodos={setTodos} />
      </section>

      <footer className="footer">
        <span className="todo-count">
          <strong>2</strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a href="#/" className="selected">
              All
            </a>
          </li>
          <li>
            <a href="#/">Active</a>
          </li>
          <li>
            <a href="#/">Completed</a>
          </li>
        </ul>

        <button className="clear-completed">Clear completed</button>
      </footer>
    </section>
  );
}

export default Todos;
