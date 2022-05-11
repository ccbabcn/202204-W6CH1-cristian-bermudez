import { useState } from "react";
import { useDispatch } from "react-redux";
import { createToDoThunk } from "../../redux/thunks/projectsThunk";
import { FormToDoStyle } from "./FormToDoStyle";

const FormToDo = ({ toDoIdtoEdit }) => {
  const formSubmit = (event) => {
    event.preventDefault();
    if (newTaskName.trim() === "") return;

    addToDO();
    setNewTaskName("");
  };

  const dispatch = useDispatch();
  const addToDO = () => {
    dispatch(createToDoThunk(newTodo));
  };

  const [newTaskName, setNewTaskName] = useState("");
  const newTodo = {
    name: newTaskName,
    done: false,
  };

  const newTaskNameSetter = (event) => {
    setNewTaskName(event.target.value);
  };

  return (
    <FormToDoStyle>
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
    </FormToDoStyle>
  );
};

export default FormToDo;
