import {actionCreatorFactory} from "typescript-fsa";
import {reducerWithInitialState} from "typescript-fsa-reducers";

const actionCreator = actionCreatorFactory();

const ADD_TODO = 'todo_app/tasks-reducer/ADD_TODO';
const TOGGLE_TODO = 'todo_app/tasks-reducer/TOGGLE_TODO';
const ENABLE_EDIT_TODO = 'todo_app/tasks-reducer/ENABLE_EDIT_TODO';
const MODIFY_TODO = 'todo_app/tasks-reducer/MODIFY_TODO';
const REMOVE_TODO = 'todo_app/tasks-reducer/REMOVE_TODO';

let initialId: number = -1;

export const addTodo = actionCreator<void>(ADD_TODO);
export const toggleTodo = actionCreator<number>(TOGGLE_TODO);
export const enableEditTodo = actionCreator<number>(ENABLE_EDIT_TODO);
export const modifyTodo = actionCreator<{id: number, text: string}>(MODIFY_TODO);
export const removeTodo = actionCreator<number>(REMOVE_TODO);

const reducer = reducerWithInitialState([])
  .case(addTodo, (state) => {
    initialId++;
    return [...state, {id: initialId, text: 'New Todo #' + (initialId + 1), completed: false, editable: false}];
  })
  .case(toggleTodo, (state, id) => (state.map((todo) => id === todo.id ? { ...todo, completed: !todo.completed } : todo)))
  .case(enableEditTodo, (state, id) => (state.map((todo) => id === todo.id ? { ...todo, editable: true } : { ...todo, editable: false })))
  .case(modifyTodo, (state, arg) => (state.map((todo) => arg.id === todo.id ? { ...todo, text: arg.text, editable: false } : todo)))
  .case(removeTodo, (state, id) => (state.filter((todo) => id !== todo.id)));

export default reducer;
