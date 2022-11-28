import { useState, useEffect } from "react";
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

  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Local Storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

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
          {filteredTodos.map((todo) => (
            <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} />
          ))}
        </ul>
      </section>

      <Footer
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
    </section>
  );
}

export default Todos;
