import { IState, IAction } from './';

export interface IStore {
  dispatch: (action: IAction) => void;
  getState: () => IState;
  subscribe: (listener: () => void) => void;
}

export interface IStoreProps {
  reducer: (state: IState, action: IAction) => IState;
}
