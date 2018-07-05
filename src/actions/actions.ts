import {Action} from 'redux';
import ActionType from './action-types';
import FilterType from "../models/filter";

export interface AddTodo extends Action {
  type: ActionType.ADD_TODO;
  payload: {
    text: string;
  }
}

export interface ToggleTodo extends Action {
  type: ActionType.TOGGLE_TODO;
  payload: {
    id: number;
  }
}

export interface EnableEditTodo extends Action {
  type: ActionType.ENABLE_EDIT_TODO;
  payload: {
    id: number;
  }
}

export interface ModifyTodo extends Action {
  type: ActionType.MODIFY_TODO;
  payload: {
    text: string;
    id: number;
  }
}

export interface RemoveTodo extends Action {
  type: ActionType.REMOVE_TODO;
  payload: {
    id: number;
  }
}

export interface ChangeFilter extends Action {
  type: ActionType.CHANGE_FILTER;
  payload: {
    filter: FilterType;
  }
}
