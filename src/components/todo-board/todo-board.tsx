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
  onLoad(): void;
}

export class TodoBoardElement extends React.Component<TodoBoardProps, {}> {
  constructor(props: any) {
    super(props);
  }

  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <div className={`${bootstrap.card} ${style.todoBoardContainer}`}>
        <div className={`${bootstrap.cardHeader} ${style.todoTitle}`}>
          <span>My Todos</span>
          <a className={style.todoAddBtn} onClick={this.props.onAdd}>Add a todo <i
            className={`${fontAwesome.fa} ${fontAwesome.faPlusCircle} ${style.todoIcon}`}></i></a>
        </div>
        {this.props.loading && <div className={style.loaderContainer}><img className={style.loaderImage} src="/assets/loader.gif"></img></div>}
        {!this.props.loading && <ul className={`${bootstrap.listGroup} ${style.listContainer}`}>
          {this.props.tasks.map((todo: Todo) => (
            <TodoElement
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              editable={todo.editable}
              onEdit={() => this.props.onEdit(todo.id)}
              onModify={(text) => this.props.onModify({text: text, id: todo.id})}
              onDone={() => this.props.onDone(todo.id)}
              onRemove={() => this.props.onRemove(todo.id)}
            />
          ))}
        </ul>}
      </div>
    );
  }
}
