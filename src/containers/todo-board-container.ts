import {connect} from 'react-redux'
import {TodoBoardElement} from "../components/todo-board/todo-board";
import TodoBoard from "../models/todo-board";
import FilterType from "../models/filter";
import Todo from "../models/todo";
import {addTodo, enableEditTodo, fetchTodo, modifyTodo, removeTodo, toggleTodo} from "../reducers/tasks-reducer";

function visibleTasks(filter: FilterType, tasks: Todo[]): Todo[] {
  switch (filter) {
    case FilterType.Completed:
      return tasks.filter((todo) => todo.completed);
    case FilterType.Pending:
      return tasks.filter((todo) => !todo.completed);
    case FilterType.All:
    default:
      return tasks
  }
}

const mapStateToProps = (state: TodoBoard) => (
  {
    ...state,
    tasks: visibleTasks(state.filter, state.tasks)
  }
);

const mapDispatchToProps = {
  onAdd: addTodo.started,
  onEdit: enableEditTodo,
  onDone: toggleTodo.started,
  onModify: modifyTodo.started,
  onRemove: removeTodo.started,
  onLoad: fetchTodo.started
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoBoardElement)
