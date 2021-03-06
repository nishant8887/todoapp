import {connect} from 'react-redux'
import TodoBoard from "../models/todo-board";
import {FilterElement} from "../components/filter/filter";
import {changeFilter} from "../reducers/filter-reducer";

const mapStateToProps = (state: TodoBoard) => (
  {
    ...state,
  }
);

const mapDispatchToProps = {
  onSelect: changeFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterElement)
