import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => {
    return [
      {
        id: 0,
        name: "Testear",
        done: true,
      },
    ];
  },
}));

describe("Given a App component", () => {
  describe("When it's call with a toDo object with the name 'Testear' and done as 'true'", () => {
    test("Then it should render a heading with the text 'Testear' and a button with the text 'Mask as undone'", () => {
      const expetedHeading = "Testear";
      const expectedButtonText = "Mark as undone";

      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const createdHeading = screen.getByRole("heading", {
        name: expetedHeading,
      });
      const createdButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(createdHeading).toBeInTheDocument();
      expect(createdButton).toBeInTheDocument();
    });
  });
});
