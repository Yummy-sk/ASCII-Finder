interface IList {
  Symbol: string;
  Decimal: string;
  Octal: string;
  Binary: string;
  Hexadecimal: string;
  'HTML Number': string;
}

const list: IList = {
  Symbol: 'Symbol',
  Decimal: 'DEC',
  Octal: 'OCT',
  Binary: 'BIN',
  Hexadecimal: 'HEX',
  'HTML Number': 'HTML Number',
};

const optionParser = (value: string) => {
  const target = list;
};
