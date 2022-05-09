import { render, screen } from "@testing-library/react";
import ToDo from "./ToDo";

describe("Given ToDo component", () => {
  describe("When it's called with the name 'Dormir'", () => {
    test("Then it should render a Todo object with a heading containing that name", () => {
      const actualToDO = {
        id: 0,
        name: "Dormir",
        done: false,
      };

      render(<ToDo toDo={actualToDO} />);
      const createdHeading = screen.getByRole("heading", {
        name: /dormir/i,
      });

      expect(createdHeading).toBeInTheDocument();
    });
  });

  describe("When it's called with a state done equal true", () => {
    test("Then it should render a button with the text 'Mark as undone'", () => {
      const actualToDO = {
        id: 0,
        name: "Testear",
        done: true,
      };

      render(<ToDo toDo={actualToDO} />);
      const createdButton = screen.getByRole("button", {
        name: /mark as undone/i,
      });

      expect(createdButton).toBeInTheDocument();
    });
  });
});
