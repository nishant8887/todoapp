import * as React from 'react';
import {render, fireEvent} from 'react-testing-library';
import {TodoElement, TodoProps} from "./todo";

test('todo-component-basic-clicks', () => {
  let props: TodoProps = {
    id: 0,
    text: 'Test Todo',
    completed: false,
    editable: false,
    onEdit: jest.fn(),
    onRemove: jest.fn(),
    onDone: jest.fn(),
    onModify: jest.fn()
  };

  const {getByTestId, queryByTestId} = render(<TodoElement {...props} />);

  expect(queryByTestId('todo-edit-input')).toBeNull();

  fireEvent.click(getByTestId('remove-todo-btn'));
  expect(props.onRemove).toHaveBeenCalledTimes(1);

  fireEvent.doubleClick(getByTestId('todo-text-container'));
  expect(props.onEdit).toHaveBeenCalledTimes(1);

  fireEvent.click(getByTestId('todo-done'));
  expect(props.onDone).toHaveBeenCalledTimes(1);
});

test('todo-component-edit-mode', () => {
  let props: TodoProps = {
    id: 0,
    text: 'Test Todo',
    completed: false,
    editable: true,
    onEdit: jest.fn(),
    onRemove: jest.fn(),
    onDone: jest.fn(),
    onModify: jest.fn()
  };

  const {getByTestId, queryByTestId} = render(<TodoElement {...props} />);

  expect(queryByTestId('todo-edit-input')).toBeDefined();

  const txt = getByTestId('todo-edit-input');

  fireEvent.blur(txt);
  expect(props.onModify).toHaveBeenCalledWith('Test Todo');

  fireEvent.focus(txt);
  fireEvent.keyPress(txt, {keyCode: 13});
  expect(props.onModify).toHaveBeenCalledWith('Test Todo');
  expect(props.onModify).toHaveBeenCalledTimes(2);
});
