import {combineReducers} from 'redux';
import tasks from './tasks-reducer';
import filter from "./filter-reducer";
import loading from "./loader-reducer";
import TodoBoard from "../models/todo-board";

const appReducer = combineReducers<TodoBoard>({
  loading,
  filter,
  tasks
});

export default appReducer;
