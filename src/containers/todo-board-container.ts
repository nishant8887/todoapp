import {connect} from 'react-redux'
import {TodoBoardElement} from "../components/todo-board/todo-board";
import {addTodo, enableEditTodo, modifyTodo, removeTodo, toggleTodo} from "../actions/action-creators";
import TodoBoard from "../models/todo-board";
import FilterType from "../models/filter";
import Todo from "../models/todo";

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
  onAdd: addTodo,
  onEdit: enableEditTodo,
  onDone: toggleTodo,
  onModify: modifyTodo,
  onRemove: removeTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoBoardElement)
