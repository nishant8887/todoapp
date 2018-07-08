import tasks, {addTodo, enableEditTodo, modifyTodo, removeTodo, toggleTodo} from "./tasks-reducer";

test('tasks-reducer-add-todo', () => {
  expect(tasks([], addTodo())).toEqual([{id: 0, text: 'New Todo #1', completed: false, editable: false}]);
});

test('tasks-reducer-remove-todo', () => {
  expect(tasks([{id: 0, text: 'New Todo #1', completed: false, editable: false}, {id: 1, text: 'New Todo #2', completed: false, editable: false}], removeTodo(0))).toEqual([{id: 1, text: 'New Todo #2', completed: false, editable: false}]);
});

test('tasks-reducer-toggle-todo-done', () => {
  expect(tasks([{id: 0, text: 'New Todo #1', completed: false, editable: false}], toggleTodo(0))).toEqual([{id: 0, text: 'New Todo #1', completed: true, editable: false}]);
});

test('tasks-reducer-toggle-todo-undone', () => {
  expect(tasks([{id: 0, text: 'New Todo #1', completed: true, editable: false}], toggleTodo(0))).toEqual([{id: 0, text: 'New Todo #1', completed: false, editable: false}]);
});

test('tasks-reducer-enable-edit', () => {
  expect(tasks([{id: 0, text: 'New Todo #1', completed: false, editable: false}], enableEditTodo(0))).toEqual([{id: 0, text: 'New Todo #1', completed: false, editable: true}]);
});

test('tasks-reducer-modify-todo', () => {
  expect(tasks([{id: 0, text: 'New Todo', completed: false, editable: false}], modifyTodo({text: 'Test', id: 0}))).toEqual([{id: 0, text: 'Test', completed: false, editable: false}]);
});
