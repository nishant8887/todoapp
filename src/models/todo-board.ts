import Todo from './todo';
import FilterType from "./filter";

interface TodoBoard {
  loading: boolean;
  filter: FilterType;
  tasks: Todo[];
}

export default TodoBoard;
