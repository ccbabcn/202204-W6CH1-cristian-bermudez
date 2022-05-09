import toDosReducer, { loadToDosActionCreator } from "./projectsSlice";

describe("Given a toDosReducer", () => {
  describe("When its called with an array of 2 toDos and an undefined type of action", () => {
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

  describe("When its called with an array of 2 toDos and loadToDos type of action", () => {
    test("Then it should return the same list of toDos", () => {
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
});
