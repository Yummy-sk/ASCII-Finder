import { IState, IAction } from './';

export interface IStoreProps {
  reducer: (state: IState, action: IAction) => IState;
}
