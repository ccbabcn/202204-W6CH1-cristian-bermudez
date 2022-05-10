import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ToDoList from "./component/ToDoList/ToDoList";
import { loadToDosActionCreator } from "./redux/features/projects/projectsSlice";
import { initialtoDos } from "./data/data";
import { loadToDosThunk } from "./redux/thunks/projectsThunks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadToDosThunk(dispatch));
  }, [dispatch]);

  return (
    <>
      <ToDoList />
    </>
  );
}

export default App;
