import axios from "axios";
import { loadToDosActionCreator } from "../features/projects/projectsSlice";

export const loadToDosThunk = () => async (dispatch) => {
  const { data: toDos } = await axios.get(process.env.REACT_APP_API_URL);

  dispatch(loadToDosActionCreator(toDos));
};
