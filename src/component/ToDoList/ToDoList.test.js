import { render, screen } from "@testing-library/react";
import ToDoList from "./ToDoList";

describe("Given ToDoList component", () => {
  describe("When it's call with a list of 2 toDos", () => {
    test("Then it should render a list with 2 list items", () => {
      render(<ToDoList />);
      const createdHeadings = screen.getAllByRole("heading");
      expect(createdHeadings).toHaveLength(2);
    });
  });
});
