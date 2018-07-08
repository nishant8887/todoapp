import filter, {changeFilter} from './filter-reducer';
import FilterType from "../models/filter";

test('filter-reducer-basic', () => {
  expect(filter(FilterType.All, changeFilter(FilterType.All))).toBe(FilterType.All);
  expect(filter(FilterType.All, changeFilter(FilterType.Pending))).toBe(FilterType.Pending);
  expect(filter(FilterType.All, changeFilter(FilterType.Completed))).toBe(FilterType.Completed);
});
