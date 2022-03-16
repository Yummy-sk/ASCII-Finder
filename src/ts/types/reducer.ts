export interface IState {
  option?: string;
  text?: string;
}

export interface IAction {
  type?: string;
  payload: {
    option?: string;
    text?: string;
  };
}

export interface IReducerProps {
  state: IState;
  action: IAction;
}
