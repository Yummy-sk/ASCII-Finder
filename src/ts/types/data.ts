export interface IData {
  DEC: string;
  OCT: string;
  HEX: string;
  BIN: string;
  Symbol: string | null;
  'HTML Number': string | null;
  'HTML Name': string | null;
  Description: string | null;
}

export interface IFetchAction {
  type: string;
  payload?: Array<IData>;
  error: boolean;
  loading: boolean;
}
