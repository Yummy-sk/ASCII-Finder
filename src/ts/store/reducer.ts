import { IState, IAction } from '../types';

const SET_OPTION: string = 'reducer/SET_OPTION';
const SET_TEXT: string = 'reducer/SET_TEXT';

export const setOption = (option: string) => ({ type: SET_OPTION, option });
export const setText = (text: string) => ({ type: SET_TEXT, text });

export function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case SET_OPTION:
      return { ...state, type: action.payload.option };
    case SET_OPTION:
      return { ...state, input: action.payload.text };
    default:
      return state;
  }
}
