import { combineReducers, createStore, applyMiddleware } from 'redux';
import { fetch } from './fetch';
import { form } from './form';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  fetch,
  form,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export const getState = () => store.getState();
export const dispatch = (action: any) => store.dispatch(action);
