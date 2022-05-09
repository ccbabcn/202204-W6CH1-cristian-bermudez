import { useSelector } from "react-redux";
import ToDo from "../ToDo/ToDo";

const ToDoList = () => {
  const initialtoDos = useSelector((state) => state.toDos);
  return (
    <ul>
      {initialtoDos.map((toDo) => {
        return <ToDo key={toDo.id} toDo={toDo} />;
      })}
    </ul>
  );
};

export default ToDoList;
