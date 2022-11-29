import { useState } from "react";

function Form({ todos, setTodos }) {
  const [inputText, setInputText] = useState("");

  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") {
      alert("You can not add empty text");
      return false;
    }

    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]); //* KÖŞELİ PARANTEZ */

    setInputText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={inputText}
          onChange={onChangeInput}
        />
      </form>
    </div>
  );
}

export default Form;
