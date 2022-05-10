import axios from "axios";

import {
  createToDoActionCreator,
  deleteToDoActionCreator,
  loadToDosActionCreator,
  toggleToDoActionCreator,
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

export const delteToDoThunk = (toDoId) => async (dispatch) => {
  try {
    const { status } = await axios.delete(
      `${process.env.REACT_APP_API_URL}${toDoId}`
    );
    if (status === 200) {
      dispatch(deleteToDoActionCreator(toDoId));
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

export const toggleToDoThuk = (toDo) => async (dispatch) => {
  try {
    const { status } = await axios.put(
      `${process.env.REACT_APP_API_URL}${toDo.id}`,
      { ...toDo, done: !toDo.done }
    );
    if (status === 200) {
      dispatch(toggleToDoActionCreator(toDo.id));
    }
  } catch {}
};
