import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "toDos",
  initialState: [],
  reducers: {
    loadToDos: (toDos, action) => [...action.payload],
  },
});

export const { loadToDos: loadToDosActionCreator } = projectSlice.actions;

export default projectSlice.reducer;
