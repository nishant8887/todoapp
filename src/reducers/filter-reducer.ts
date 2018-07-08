import {actionCreatorFactory} from "typescript-fsa";
import FilterType from "../models/filter";
import {reducerWithInitialState} from "typescript-fsa-reducers";

const actionCreator = actionCreatorFactory();

const CHANGE_FILTER = 'todo_app/filter-reducer/CHANGE_FILTER';

export const changeFilter = actionCreator<FilterType>(CHANGE_FILTER);

const reducer = reducerWithInitialState(FilterType.All)
  .case(changeFilter, (state, filter) => (filter));

export default reducer;
