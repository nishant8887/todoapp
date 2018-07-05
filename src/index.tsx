import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'

import TodoBoardContainer from './containers/todo-board-container';
import FilterElementContainer from './containers/filter-container';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <TodoBoardContainer />
      <FilterElementContainer />
    </div>
  </Provider>,
  document.getElementById('app-container')
);
