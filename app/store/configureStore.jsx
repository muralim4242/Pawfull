import * as redux from 'redux';
import thunk from 'redux-thunk';

import {appReducer,authReducer,formReducer,resultReducer} from 'reducers'

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    app:appReducer,
    auth: authReducer,
    form:formReducer,
    result:resultReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
