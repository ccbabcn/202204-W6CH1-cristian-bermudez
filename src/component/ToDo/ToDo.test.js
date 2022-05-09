import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../store/store";
import ToDo from "./ToDo";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given ToDo component", () => {
  describe("When it's called with the name 'Dormir'", () => {
    test("Then it should render a Todo object with a heading containing that name", () => {
      const actualToDO = {
        id: 0,
        name: "Dormir",
        done: false,
      };

      render(
        <Provider store={store}>
          <ToDo toDo={actualToDO} />
        </Provider>
      );
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

      render(
        <Provider store={store}>
          <ToDo toDo={actualToDO} />
        </Provider>
      );

      const createdButton = screen.getByRole("button", {
        name: /mark as undone/i,
      });

      expect(createdButton).toBeInTheDocument();
    });
  });

  describe("When the user clicks in the Delete Button", () => {
    test("Then it should call the function passed to the button'", () => {
      const actualToDO = {
        id: 0,
        name: "Testear",
        done: true,
      };

      render(
        <Provider store={store}>
          <ToDo toDo={actualToDO} />
        </Provider>
      );

      const createdDeleteButton = screen.getByRole("button", {
        name: /delete/i,
      });

      userEvent.click(createdDeleteButton);
      expect(createdDeleteButton).toBeInTheDocument();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
