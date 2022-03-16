import { IState, IAction } from '../types';

const SET_OPTION: string = 'reducer/SET_OPTION';
const SET_TEXT: string = 'reducer/SET_TEXT';

export const setOption = (option: string) => ({ type: SET_OPTION, payload: { option } });
export const setText = (text: string) => ({ type: SET_TEXT, payload: { text } });

export function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case SET_OPTION:
      return { ...state, option: action.payload.option };
    case SET_TEXT:
      return { ...state, input: action.payload.text };
    default:
      return state;
  }
}
