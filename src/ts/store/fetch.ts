import { _fetch } from '../utils';

interface IData {
  DEC: string;
  OCT: string;
  HEX: string;
  BIN: string;
  Symbol: string | null;
  'HTML Number': string | null;
  'HTML Name': string | null;
  Description: string | null;
}

interface IFetchAction {
  type: string;
  payload?: Array<IData>;
  error: boolean;
  loading: boolean;
}

const GET_DATA = 'fetch/GET_DATA';
const GET_DATA_SUCCESS = 'fetch/GET_DATA_SUCCESS';
const GET_DATA_FAILURE = 'fetch/GET_DATA_FAILURE';

export const getData = () => async (dispatch: any) => {
  dispatch({ type: GET_DATA });
  try {
    const data = await _fetch();
    dispatch({ type: GET_DATA_SUCCESS, payload: data });
  } catch (e) {
    console.error(e);
    dispatch({ type: GET_DATA_FAILURE, error: true });
  }
};

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export function fetch(state = initialState, action: IFetchAction) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };
    default:
      return state;
  }
}
