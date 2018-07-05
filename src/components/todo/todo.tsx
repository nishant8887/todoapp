import * as React from 'react';
import Todo from "../../models/todo";
import * as style from './todo.scss';
import * as bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import * as fontAwesome from 'font-awesome/css/font-awesome.min.css';

export interface TodoProps extends Todo {
  onEdit(): void;
  onModify(text: string): void;
  onDone(): void;
  onRemove(): void;
}

export function TodoElement(props: TodoProps) {
  return (
    <li className={`${bootstrap.listGroupItem}`}>
      <div className={style.todoContainer}>
        <div className={style.todoDone}>
          <a onClick={props.onDone}>{props.completed ? <i className={`${fontAwesome.fa} ${fontAwesome.faCheckCircle} ${style.completedCheck}`}></i>: <i className={`${fontAwesome.fa} ${fontAwesome.faCircleThin} ${style.notCompletedCheck}`}></i>}</a>
        </div>
        <div className={style.todoTextContainer} onDoubleClick={props.onEdit}>
          {!props.editable &&
            <p className={`${style.todoText} ${props.completed? style.completedText : ''}`}>{props.text}</p>
          }
          {props.editable &&
            <input autoFocus className={`${style.todoInput}`} type="text" defaultValue={props.text} onBlur={(e) => props.onModify(e.currentTarget.value)} onKeyPress={(e) => { if (e.key == 'Enter') props.onModify(e.currentTarget.value); }} />
          }
        </div>
        <div className={style.todoClose}>
          <a onClick={props.onRemove} className={bootstrap.close}>
            <span aria-hidden="true">&times;</span>
          </a>
        </div>
      </div>
    </li>
  );
}
