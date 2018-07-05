import Todo from './todo';
import FilterType from "./filter";

interface TodoBoard {
  filter: FilterType
  tasks: Todo[];
}

export default TodoBoard;
