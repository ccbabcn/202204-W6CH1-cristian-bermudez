import { initialtoDos } from "../../data";
import ToDo from "../ToDo/ToDo";

const ToDoList = () => {
  return (
    <ul>
      {initialtoDos.map((toDo) => {
        return <ToDo key={toDo.id} toDo={toDo} />;
      })}
    </ul>
  );
};

export default ToDoList;
