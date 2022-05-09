import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "toDos",
  initialState: [],
  reducers: {
    loadToDos: (toDos, action) => [...action.payload],
    deleteToDo: (toDos, action) =>
      toDos.filter((toDo) => toDo.id !== action.payload),
  },
});

export const {
  loadToDos: loadToDosActionCreator,
  deleteToDo: deleteToDoActionCreator,
} = projectSlice.actions;

export default projectSlice.reducer;
