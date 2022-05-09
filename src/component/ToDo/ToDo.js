import PropTypes from "prop-types";

const ToDo = ({ toDo: { name, done } }) => {
  return (
    <li>
      <h3>{name}</h3>
      {done ? <button>Mark as undone</button> : <button>Mark as done</button>}
      <button>Borrar</button>
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
