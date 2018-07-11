import * as React from 'react';
import {FilterElement, FilterProps} from './filter';
import {render, fireEvent} from 'react-testing-library';
import FilterType from "../../models/filter";

test('filter-component-selection', () => {
  let props: FilterProps = {
    filter: FilterType.All,
    onSelect(filter: FilterType) {
      props.filter = filter;
    }
  };

  const {getByText} = render(<FilterElement {...props} />);

  fireEvent.click(getByText('Pending'));
  expect(props.filter).toEqual(FilterType.Pending);

  fireEvent.click(getByText('Completed'));
  expect(props.filter).toEqual(FilterType.Completed);

  fireEvent.click(getByText('All'));
  expect(props.filter).toEqual(FilterType.All);
});
