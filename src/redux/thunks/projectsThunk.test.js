import {
  createToDoActionCreator,
  deleteToDoActionCreator,
  loadToDosActionCreator,
  toggleToDoActionCreator,
} from "../features/projects/projectsSlice";
import {
  createToDoThunk,
  delteToDoThunk,
  loadToDosThunk,
  toggleToDoThuk,
} from "./projectsThunk";

describe("Given a loadToDosThunk", () => {
  describe("When its invoked", () => {
    test("Then it should disptach loadToDosActionCreator", async () => {
      const thunk = loadToDosThunk();
      const dispatch = jest.fn();

      const toDos = [
        {
          id: 1,
          name: "dormir",
          done: false,
        },
        {
          id: 2,
          name: "testear",
          done: true,
        },
      ];

      const expectedActionCreator = loadToDosActionCreator(toDos);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedActionCreator);
    });
  });
});

describe("Given a createToDoThunk", () => {
  describe("When its invoked", () => {
    test("Then it should disptach createToDoActionCreator", async () => {
      const thunk = createToDoThunk();
      const mockObject = {};

      const dispatch = jest.fn();
      const expectedActionCreator = createToDoActionCreator(mockObject);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedActionCreator);
    });
  });
});

describe("Given a delteToDoThunk", () => {
  describe("When its invoked", () => {
    test("Then it should disptach deleteToDoActionCreator", async () => {
      const idToDelete = 0;

      const thunk = delteToDoThunk(idToDelete);

      const dispatch = jest.fn();
      const expectedActionCreator = deleteToDoActionCreator(idToDelete);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedActionCreator);
    });
  });
});

describe("Given a toggleToDoThuk", () => {
  describe("When its invoked", () => {
    test("Then it should disptach toggleToDoActionCreator", async () => {
      const idToToggle = 0;
      const toDoToToggle = {
        id: 0,
        name: "dormir",
        done: false,
      };

      const thunk = toggleToDoThuk(toDoToToggle);

      const dispatch = jest.fn();
      const expectedActionCreator = toggleToDoActionCreator(idToToggle);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedActionCreator);
    });
  });
});
