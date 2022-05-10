import axios from "axios";

import {
  createToDoActionCreator,
  loadToDosActionCreator,
} from "../features/projects/projectsSlice";

export const loadToDosThunk = () => async (dispatch) => {
  try {
    const { data: toDos, status } = await axios.get(
      process.env.REACT_APP_API_URL
    );
    if (status === 200) {
      dispatch(loadToDosActionCreator(toDos));
    }
  } catch {}
};

export const createToDoThunk = (toDo) => async (dispatch) => {
  try {
    const { status } = await axios.post(process.env.REACT_APP_API_URL, toDo);
    if (status === 201) {
      dispatch(createToDoActionCreator(toDo));
    }
  } catch {}
};
