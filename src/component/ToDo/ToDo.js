import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteToDoActionCreator } from "../../redux/features/projects/projectsSlice";

const ToDo = ({ toDo: { id, name, done } }) => {
  const dispatch = useDispatch();
  const deleteToDo = () => {
    dispatch(deleteToDoActionCreator(id));
  };

  return (
    <li>
      <h3>{name}</h3>
      {done ? <button>Mark as undone</button> : <button>Mark as done</button>}
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
