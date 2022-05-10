import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createToDoActionCreator } from "../../redux/features/projects/projectsSlice";

const FormToDo = ({ toDoIdtoEdit }) => {
  const actualTodos = useSelector((state) => state.toDos);

  const formSubmit = (event) => {
    event.preventDefault();
    if (newTaskName.trim() === "") return;

    addToDO();
    setNewTaskName("");
  };

  const dispatch = useDispatch();
  const addToDO = () => {
    dispatch(createToDoActionCreator(newTodo));
  };

  const [newTaskName, setNewTaskName] = useState("");
  const newTodo = {
    id: newTaskName[0] + actualTodos.length,
    name: newTaskName,
    done: false,
  };

  const newTaskNameSetter = (event) => {
    setNewTaskName(event.target.value);
  };

  return (
    <>
      <form className="formTodo" onSubmit={formSubmit} autoComplete="off">
        <label htmlFor="name">{toDoIdtoEdit}New to Do name</label>
        <input
          required
          id="name"
          autoFocus
          type={"text"}
          placeholder={"enter task name"}
          value={newTaskName}
          onChange={newTaskNameSetter}
        />
        <button onClick={formSubmit}>create</button>
      </form>

      <form className="formToEdit" onSubmit={formSubmit} autoComplete="off">
        <label htmlFor="name">{toDoIdtoEdit}New to Do name</label>
        <input
          required
          id="name"
          autoFocus
          type={"text"}
          placeholder={"enter task name"}
          value={newTaskName}
          onChange={newTaskNameSetter}
        />
        <button onClick={formSubmit}>create</button>
      </form>
    </>
  );
};

export default FormToDo;
