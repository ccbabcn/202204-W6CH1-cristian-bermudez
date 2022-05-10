import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ToDoList from "./component/ToDoList/ToDoList";
import { loadToDosThunk } from "./redux/thunks/projectsThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadToDosThunk());
  }, [dispatch]);

  return (
    <>
      <ToDoList />
    </>
  );
}

export default App;
