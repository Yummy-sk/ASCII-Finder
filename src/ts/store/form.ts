import { IAction } from '../types';
import { IState } from '../types/reducer';

const SET_OPTION: string = 'reducer/SET_OPTION';
const SET_TEXT: string = 'reducer/SET_TEXT';

export const setOption = (option: string) => ({ type: SET_OPTION, payload: option });
export const setText = (text: string) => ({ type: SET_TEXT, payload: text });

const initialState: IState = {
  option: '',
  text: '',
};

export function form(state = initialState, action: IAction): IState {
  switch (action.type) {
    case SET_OPTION:
      return { ...state, option: action.payload as string };
    case SET_TEXT:
      console.log('ds');
      return { ...state, text: action.payload as string };
    default:
      return state;
  }
}
