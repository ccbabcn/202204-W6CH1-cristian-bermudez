const ToDo = ({ toDo: { name, done } }) => {
  return (
    <>
      <h3>{name}</h3>
      {done ? <button>Mark as undone</button> : <button>Mark as done</button>}
      <button>Borrar</button>
    </>
  );
};

export default ToDo;
