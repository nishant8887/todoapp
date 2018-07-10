import {createStore, applyMiddleware} from 'redux';
import appReducer from './reducers/index'
import {createEpicMiddleware} from 'redux-observable';
import appEpic from "./epics/index";

const epicMiddleware = createEpicMiddleware();

const store = createStore(appReducer, applyMiddleware(epicMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

epicMiddleware.run(appEpic);

export default store;
