import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  delteToDoThunk,
  toggleToDoThuk,
} from "../../redux/thunks/projectsThunk";

const ToDo = ({ toDo, toDo: { id, name, done }, setToDoIdToEdit }) => {
  const dispatch = useDispatch();
  const deleteToDo = () => {
    dispatch(delteToDoThunk(id));
  };

  const toggleToDo = () => {
    dispatch(toggleToDoThuk(toDo));
  };

  const toDoToEdit = (event) => {
    setToDoIdToEdit(id);
  };

  return (
    <li className="toDo">
      <button onClick={toDoToEdit}>Edit</button>
      <h3>{name}</h3>
      {done ? (
        <button onClick={toggleToDo}>Mark as undone</button>
      ) : (
        <button onClick={toggleToDo}>Mark as done</button>
      )}
      <button onClick={deleteToDo}>Delete</button>
    </li>
  );
};

ToDo.propTypes = {
  toDo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ToDo;
