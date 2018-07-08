import * as React from 'react';
import {TodoElement} from '../todo/todo';
import Todo from "../../models/todo";
import TodoBoard from "../../models/todo-board";
import * as style from './todo-board.scss';
import * as bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import * as fontAwesome from 'font-awesome/css/font-awesome.min.css';

export interface TodoBoardProps extends TodoBoard {
  onAdd(): void;
  onEdit(id: number): void;
  onModify(arg: {text: string; id: number}): void;
  onDone(id: number): void;
  onRemove(id: number): void;
}

export function TodoBoardElement(props: TodoBoardProps) {
  return (
    <div className={`${bootstrap.card} ${style.todoBoardContainer}`}>
      <div className={`${bootstrap.cardHeader} ${style.todoTitle}`}>
        <span>My Todos</span>
        <a className={style.todoAddBtn} onClick={props.onAdd}>Add a todo <i className={`${fontAwesome.fa} ${fontAwesome.faPlusCircle} ${style.todoIcon}`}></i></a>
      </div>
      <ul className={`${bootstrap.listGroup} ${style.listContainer}`}>
        {props.tasks.map((todo: Todo) => (
          <TodoElement
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            editable={todo.editable}
            onEdit={() => props.onEdit(todo.id)}
            onModify={(text) => props.onModify({text: text, id: todo.id})}
            onDone={() => props.onDone(todo.id)}
            onRemove={() => props.onRemove(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}
