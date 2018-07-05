import * as React from 'react';
import { shallow } from 'enzyme';
import {FilterElement, FilterProps} from './filter';
import FilterType from "../../models/filter";

test('filter renders three filter types', () => {
  const wrapper = shallow(<FilterElement />);
  expect(wrapper.find('a')).toHaveLength(3);
});

test('filter selection with click', () => {
  let props: FilterProps = {
    filter: FilterType.All,
    onSelect(filter: FilterType) {
      props.filter = filter;
    }
  };

  const wrapper = shallow(<FilterElement {...props} />);

  wrapper.find('a').at(1).simulate('click', {
    preventDefault: () => {
    }
  });
  expect(props.filter).toEqual(FilterType.Pending);

  wrapper.find('a').at(2).simulate('click', {
    preventDefault: () => {
    }
  });
  expect(props.filter).toEqual(FilterType.Completed);

  wrapper.find('a').at(0).simulate('click', {
    preventDefault: () => {
    }
  });
  expect(props.filter).toEqual(FilterType.All);
});
