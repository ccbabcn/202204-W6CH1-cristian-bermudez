import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ToDoList from "./component/ToDoList/ToDoList";
import { loadToDosActionCreator } from "./redux/features/projects/projectsSlice";
import { initialtoDos } from "./data";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadToDosActionCreator(initialtoDos));
  }, [dispatch]);

  return (
    <>
      <ToDoList />
    </>
  );
}

export default App;
