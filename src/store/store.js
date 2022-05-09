import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../redux/features/projects/projectsSlice";

const store = configureStore({
  reducer: { toDos: projectReducer },
});

export default store;
