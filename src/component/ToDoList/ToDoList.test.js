import { render, screen } from "@testing-library/react";
import ToDoList from "./ToDoList";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => {
    return [
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
      {
        id: 3,
        name: "Comer",
        done: false,
      },
    ];
  },
}));

describe("Given ToDoList component", () => {
  describe("When it's call with a list of 3 toDos", () => {
    test("Then it should render a list with 3 items with 1 heading each", () => {
      const expectedNumgerofHeadings = 3;

      render(<ToDoList />);
      const createdHeadings = screen.getAllByRole("heading");

      expect(createdHeadings).toHaveLength(expectedNumgerofHeadings);
    });
  });
});
