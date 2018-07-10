import {map, filter, mergeMap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {Epic} from "redux-observable";

import {addTodo, fetchTodo, modifyTodo, removeTodo, toggleTodo} from "../reducers/tasks-reducer";

const API_BASE_URL = "http://localhost:8000/api/1";

export const fetchTodoFromServerEpic: Epic = (action$) => action$.pipe(filter(fetchTodo.started.match), mergeMap(action =>
    ajax.get(API_BASE_URL + '/').pipe(
      map(response => fetchTodo.done({result: response.response})),
      catchError((error, caught) => of(fetchTodo.failed({error: error})))
    )
  )
);

export const addTodoToServerEpic: Epic = (action$) => action$.pipe(filter(addTodo.started.match), mergeMap(action =>
    ajax.put(API_BASE_URL + '/todo').pipe(
      map(response => addTodo.done({result: response.response})),
      catchError((error, caught) => of(addTodo.failed({error: error})))
    )
  )
);

export const toggleTodoToServerEpic: Epic = (action$) => action$.pipe(filter(toggleTodo.started.match), mergeMap(action =>
    ajax.post(API_BASE_URL + '/todo/' + action.payload + '/toggle').pipe(
      map(response => toggleTodo.done({params: action.payload, result: response.response.completed})),
      catchError((error, caught) => of(toggleTodo.failed({params: action.payload, error: error})))
    )
  )
);

export const modifyTodoToServerEpic: Epic = (action$) => action$.pipe(filter(modifyTodo.started.match), mergeMap(action =>
    ajax.post(API_BASE_URL + '/todo/' + action.payload.id, action.payload, {"Content-Type": "application/json"}).pipe(
      map(response => modifyTodo.done({params: action.payload, result: response.response})),
      catchError((error, caught) => of(modifyTodo.failed({params: action.payload, error: error})))
    )
  )
);

export const removeTodoToServerEpic: Epic = (action$) => action$.pipe(filter(removeTodo.started.match), mergeMap(action =>
    ajax.delete(API_BASE_URL + '/todo/' + action.payload).pipe(
      map(response => removeTodo.done({params: action.payload})),
      catchError((error, caught) => of(removeTodo.failed({params: action.payload, error: error})))
    )
  )
);
