import { _fetch } from '../utils';
import { IData, IFetchAction } from '../types';

const GET_DATA = 'fetch/GET_DATA';
const GET_DATA_SUCCESS = 'fetch/GET_DATA_SUCCESS';
const GET_DATA_FAILURE = 'fetch/GET_DATA_FAILURE';
const GET_DATA_FILTER = 'fetch/GET_DATA_FILTER';

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

export const filterData = (filtered: IData | null) => ({ type: GET_DATA_FILTER, payload: filtered });

const initialState = {
  loading: false,
  data: null,
  error: null,
  filtered: null,
};

export function fetch(state = initialState, action: IFetchAction) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
        filtered: null,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        filtered: null,
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
        filtered: null,
      };
    case GET_DATA_FILTER:
      return {
        ...state,
        loading: false,
        error: null,
        filtered: action.payload,
      };
    default:
      return state;
  }
}
