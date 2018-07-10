import {combineEpics} from "redux-observable";
import {
  addTodoToServerEpic, fetchTodoFromServerEpic, modifyTodoToServerEpic, removeTodoToServerEpic,
  toggleTodoToServerEpic
} from "./tasks-epic";

const appEpic = combineEpics(
  fetchTodoFromServerEpic,
  addTodoToServerEpic,
  toggleTodoToServerEpic,
  modifyTodoToServerEpic,
  removeTodoToServerEpic
);

export default appEpic;
