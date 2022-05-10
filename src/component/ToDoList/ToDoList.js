import { useSelector } from "react-redux";
import { useState } from "react";
import FormToDo from "../FormToDo/FormToDo";
import ToDo from "../ToDo/ToDo";
import { ToDoListStyled } from "./ToDoListStyle";

const ToDoList = () => {
  const [toDoIdtoEdit, setToDoIdToEdit] = useState("");
  const initialtoDos = useSelector((state) => state.toDos);
  return (
    <ToDoListStyled>
      <ul className="toDos-container">
        {initialtoDos.map((toDo) => {
          return (
            <ToDo key={toDo.id} toDo={toDo} setToDoIdToEdit={setToDoIdToEdit} />
          );
        })}
      </ul>
      <FormToDo toDoIdtoEdit={toDoIdtoEdit} />
    </ToDoListStyled>
  );
};

export default ToDoList;
