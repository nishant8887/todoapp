import {Action} from 'redux';
import ActionType from '../actions/action-types';
import {EnableEditTodo, ModifyTodo, ToggleTodo} from "../actions/actions";
import Todo from "../models/todo";

let initialId: number = -1;

export function tasks(state: Todo[] = [], action: Action) {
  let selectedId: number;
  switch (action.type) {
    case ActionType.ADD_TODO:
      initialId++;
      return [ ...state, {id: initialId, text: 'New Todo #' + (initialId+1), completed: false, editable: false}];
    case ActionType.TOGGLE_TODO:
      selectedId = (<ToggleTodo> action).payload.id;
      return state.map((todo) => selectedId === todo.id ? { ...todo, completed: !todo.completed } : todo);
    case ActionType.ENABLE_EDIT_TODO:
      selectedId = (<EnableEditTodo> action).payload.id;
      return state.map((todo) => selectedId === todo.id ? { ...todo, editable: true } : { ...todo, editable: false });
    case ActionType.MODIFY_TODO:
      selectedId = (<ModifyTodo> action).payload.id;
      return state.map((todo) => selectedId === todo.id ? { ...todo, text: (<ModifyTodo> action).payload.text, editable: false } : todo);
    case ActionType.REMOVE_TODO:
      selectedId = (<ModifyTodo> action).payload.id;
      return state.filter((todo) => selectedId !== todo.id);
    default:
      return state;
  }
}
