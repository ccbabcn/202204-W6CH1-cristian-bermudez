import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
import FormToDo from "./FormToDo";

describe("Given the FormToDo component", () => {
  describe("When its rendered", () => {
    test("It should contain a field with the placeholder text 'enter task name'", () => {
      render(
        <Provider store={store}>
          <FormToDo />
        </Provider>
      );

      const nameField = screen.getByPlaceholderText("enter task name");

      expect(nameField).toBeInTheDocument();
    });

    test("It should contain a button with the text 'create'", () => {
      render(
        <Provider store={store}>
          <FormToDo />
        </Provider>
      );

      const submitButton = screen.getByRole("button", { name: /create/i });

      expect(submitButton).toBeInTheDocument();
    });
  });
});
