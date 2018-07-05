import ActionType from './action-types';
import * as Actions from './actions';
import FilterType from "../models/filter";

export function addTodo(): Actions.AddTodo {
  return {
    type: ActionType.ADD_TODO,
    payload: {
      text: 'New Task'
    }
  }
}

export function toggleTodo(id: number): Actions.ToggleTodo {
  return {
    type: ActionType.TOGGLE_TODO,
    payload: {
      id: id
    }
  }
}

export function enableEditTodo(id: number): Actions.EnableEditTodo {
  return {
    type: ActionType.ENABLE_EDIT_TODO,
    payload: {
      id: id
    }
  }
}

export function modifyTodo(text: string, id: number): Actions.ModifyTodo {
  return {
    type: ActionType.MODIFY_TODO,
    payload: {
      text: text,
      id: id
    }
  }
}

export function removeTodo(id: number): Actions.RemoveTodo {
  return {
    type: ActionType.REMOVE_TODO,
    payload: {
      id: id
    }
  }
}

export function changeFilter(filter: FilterType): Actions.ChangeFilter {
  return {
    type: ActionType.CHANGE_FILTER,
    payload: {
      filter: filter
    }
  }
}
