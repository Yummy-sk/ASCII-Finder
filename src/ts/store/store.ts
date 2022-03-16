import { IState, IAction } from '../types';

export function createStore(reducer: (state: IState, action: IAction) => object) {
  let state = {};
  const handler: Array<() => void> = [];

  function dispatch(action: IAction) {
    state = reducer(state, action);
    handler.forEach((listener) => listener());
  }

  function getState() {
    return state;
  }

  function subscribe(listener: () => void) {
    handler.push(listener);
  }

  return {
    dispatch,
    getState,
    subscribe,
  };
}
