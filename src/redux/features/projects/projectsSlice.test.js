import toDosReducer, {
  deleteToDoActionCreator,
  loadToDosActionCreator,
  createToDoActionCreator,
} from "./projectsSlice";

describe("Given a toDosReducer", () => {
  describe("When its called with an list of 2 toDos and an undefined type of action", () => {
    test("Then it should return the same list of toDos", () => {
      const actionType = { type: "undefinedType" };
      const listOfTodos = [
        {
          id: 0,
          name: "Testear",
          done: true,
        },
        {
          id: 2,
          name: "Dormir",
          done: false,
        },
      ];

      const reducedListofToDos = toDosReducer(listOfTodos, actionType);

      expect(reducedListofToDos).toEqual(listOfTodos);
    });
  });

  describe("When its called with an list of 2 toDos, a loadToDosActionCreator and the initial state it's an empty array", () => {
    test("Then it should return a new list with the list of 2 toDos", () => {
      const initialListofTodos = [];

      const listOfTodos = [
        {
          id: 0,
          name: "Testear",
          done: true,
        },
        {
          id: 2,
          name: "Dormir",
          done: false,
        },
      ];

      const actionLoad = loadToDosActionCreator(listOfTodos);

      const loadedListofToDos = toDosReducer(initialListofTodos, actionLoad);

      expect(loadedListofToDos).toEqual(listOfTodos);
    });
  });

  describe("When its called with an list of 2 toDos a deleteToDoActionCreator and the id of the last toDo", () => {
    test("Then it should return a new list without the last toDo", () => {
      const initialListofTodos = [
        {
          id: 0,
          name: "Testear",
          done: true,
        },
        {
          id: 2,
          name: "Dormir",
          done: false,
        },
      ];

      const expedtedListOfTodos = [
        {
          id: 0,
          name: "Testear",
          done: true,
        },
      ];

      const actionLoad = deleteToDoActionCreator(initialListofTodos[1].id);

      const filteredListofToDos = toDosReducer(initialListofTodos, actionLoad);

      expect(filteredListofToDos).toEqual(expedtedListOfTodos);
    });
  });

  describe("When its called with an list of 2 toDos a createToDoActionCreator and a new toDo object", () => {
    test("Then it should return a new list containing the 3 toDos", () => {
      const initialListofTodos = [
        {
          id: 0,
          name: "Testear",
          done: true,
        },
        {
          id: 1,
          name: "Dormir",
          done: false,
        },
      ];

      const toDotoAdd = [
        {
          id: 2,
          name: "Codear",
          done: true,
        },
      ];

      const actionAdd = createToDoActionCreator(toDotoAdd);

      const addedListofToDos = toDosReducer(initialListofTodos, actionAdd);

      expect(addedListofToDos).toContain(toDotoAdd);
    });
  });
});
