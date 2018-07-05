import {combineReducers} from 'redux';
import {tasks} from './tasks-reducer';
import {filter} from "./filter-reducer";

const appReducer = combineReducers({
  filter,
  tasks
});

export default appReducer;
