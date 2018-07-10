import {reducerWithInitialState} from "typescript-fsa-reducers";
import {fetchTodo} from "./tasks-reducer";

const reducer = reducerWithInitialState(false)
  .case(fetchTodo.started, (state) => true)
  .case(fetchTodo.done, (state) => false);

export default reducer;
