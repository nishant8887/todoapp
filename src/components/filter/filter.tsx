import * as React from 'react';
import FilterType from "../../models/filter";
import * as style from './filter.scss';
import * as bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

export interface FilterProps {
  filter: FilterType;
  onSelect(filter: FilterType): void;
}

export function FilterElement(props: FilterProps) {
  return (
    <ul className={`${bootstrap.nav} ${bootstrap.navPills} ${bootstrap.navFill} ${bootstrap.fixedBottom} ${style.filterContainer}`}>
      <li className={bootstrap.navItem}>
        <a href={'#'} onClick={(e) => {e.preventDefault(); props.onSelect(FilterType.All)}} className={`${bootstrap.navLink} ${props.filter == FilterType.All ? style.activeFilter: ''}`}>All</a>
      </li>
      <li className={bootstrap.navItem}>
        <a href={'#'} onClick={(e) => {e.preventDefault(); props.onSelect(FilterType.Pending)}}className={`${bootstrap.navLink} ${props.filter == FilterType.Pending ? style.activeFilter: ''}`}>Pending</a>
      </li>
      <li className={bootstrap.navItem}>
        <a href={'#'} onClick={(e) => {e.preventDefault(); props.onSelect(FilterType.Completed)}} className={`${bootstrap.navLink} ${props.filter == FilterType.Completed ? style.activeFilter: ''}`}>Completed</a>
      </li>
    </ul>
  );
}
