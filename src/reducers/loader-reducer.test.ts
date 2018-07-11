import loading from './loader-reducer';
import {fetchTodo} from "./tasks-reducer";

test('loader-reducer-basic', () => {
  expect(loading(false, fetchTodo.started)).toBe(true);
  expect(loading(true, fetchTodo.done)).toBe(false);
});
