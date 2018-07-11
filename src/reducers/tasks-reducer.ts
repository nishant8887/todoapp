import {actionCreatorFactory} from "typescript-fsa";
import {reducerWithInitialState} from "typescript-fsa-reducers";
import Todo from "../models/todo";

const actionCreator = actionCreatorFactory();

const FETCH_TODO = 'todo_app/tasks-reducer/FETCH_TODO';
const ADD_TODO = 'todo_app/tasks-reducer/ADD_TODO';
const TOGGLE_TODO = 'todo_app/tasks-reducer/TOGGLE_TODO';
const ENABLE_EDIT_TODO = 'todo_app/tasks-reducer/ENABLE_EDIT_TODO';
const MODIFY_TODO = 'todo_app/tasks-reducer/MODIFY_TODO';
const REMOVE_TODO = 'todo_app/tasks-reducer/REMOVE_TODO';

export const fetchTodo = actionCreator.async<void, Todo[]>(FETCH_TODO);
export const addTodo = actionCreator.async<void, {id: number, text: string}>(ADD_TODO);
export const toggleTodo = actionCreator.async<number, boolean>(TOGGLE_TODO);
export const modifyTodo = actionCreator.async<{id: number, text: string}, {text: string}>(MODIFY_TODO);
export const removeTodo = actionCreator.async<number, void>(REMOVE_TODO);
export const enableEditTodo = actionCreator<number>(ENABLE_EDIT_TODO);

const reducer = reducerWithInitialState([])
  .case(fetchTodo.done, (state, arg) => (arg.result.map((todo) => ({...todo, editable: false}))))
  .case(addTodo.done, (state, arg) => {
    return [...state, {id: arg.result.id, text: arg.result.text, completed: false, editable: false}];
  })
  .case(toggleTodo.done, (state, arg) => (state.map((todo) => arg.params === todo.id ? { ...todo, completed: arg.result } : todo)))
  .case(modifyTodo.done, (state, arg) => (state.map((todo) => arg.params.id === todo.id ? { ...todo, text: arg.result.text, editable: false } : todo)))
  .case(modifyTodo.failed, (state, arg) => (state.map((todo) => arg.params.id === todo.id ? { ...todo, editable: false } : todo)))
  .case(removeTodo.done, (state, arg) => (state.filter((todo) => arg.params !== todo.id)))
  .case(enableEditTodo, (state, id) => (state.map((todo) => id === todo.id ? { ...todo, editable: true } : { ...todo, editable: false })));

export default reducer;
