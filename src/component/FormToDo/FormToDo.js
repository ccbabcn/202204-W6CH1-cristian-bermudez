import { useState } from "react";

const FormToDo = () => {
  const formSubmit = (event) => {
    event.preventDefault();
  };

  const [newTaskName, setNewTaskName] = useState("");

  const newTaskNameSetter = (event) => {
    setNewTaskName(event.target.value);
  };

  return (
    <form onSubmit={formSubmit} autoComplete="off">
      <label htmlFor="name">ToDo name</label>
      <input
        required
        id="name"
        autoFocus
        type={"text"}
        placeholder={"enter task name"}
        value={newTaskName}
        onChange={newTaskNameSetter}
      />
    </form>
  );
};

export default FormToDo;
