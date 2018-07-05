import {Action} from 'redux';
import ActionType from '../actions/action-types';
import FilterType from "../models/filter";
import {ChangeFilter} from "../actions/actions";

export function filter(state: FilterType = FilterType.All, action: Action) {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      return (<ChangeFilter> action).payload.filter;
    default:
      return state;
  }
}
