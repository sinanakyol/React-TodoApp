import { useState } from "react";
import { useEffect } from "react";
import Form from "./form";
import Todo from "./todo";
import Footer from "./footer";

function Todos() {
  const [todos, setTodos] = useState([
    {
      text: "Learn JavaScript",
      completed: true,
      id: 1,
    },
    {
      text: "Learn React",
      completed: false,
      id: 2,
    },
    {
      text: "Have a life!",
      completed: false,
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
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} />
          ))}
        </ul>
      </section>

      <Footer />
    </section>
  );
}

export default Todos;
