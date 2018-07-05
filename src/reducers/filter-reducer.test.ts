import {filter} from './filter-reducer';
import {changeFilter} from "../actions/action-creators";
import FilterType from "../models/filter";

test('filter-reducer-basic', () => {
  expect(filter(FilterType.All, changeFilter(FilterType.All))).toBe(FilterType.All);
  expect(filter(FilterType.All, changeFilter(FilterType.Pending))).toBe(FilterType.Pending);
  expect(filter(FilterType.All, changeFilter(FilterType.Completed))).toBe(FilterType.Completed);
});
