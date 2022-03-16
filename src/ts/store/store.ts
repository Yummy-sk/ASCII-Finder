import { IState, IAction } from '../types';

export function createStore(reducer: (state: IState, action: IAction) => object) {
  let state = {};
  const handler: Array<() => void> = [];

  function dispatch(action: IAction) {
    console.log('ds');
    state = reducer(state, action);
    handler.forEach((listener) => listener());
  }

  function getState() {
    return state;
  }

  function subscribe(listener: any) {
    listener();
    handler.push(listener);
  }

  return {
    dispatch,
    getState,
    subscribe,
  };
}
