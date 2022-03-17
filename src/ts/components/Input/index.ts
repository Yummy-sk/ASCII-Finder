import { setText, dispatch, getState, filterData } from '../../store';
import { $ } from '../../utils';
import { IData } from '../../types';

function changeState(value: string, data: Array<IData>) {
  const filtered = data.filter((data: any) => {
    for (let i in data) {
      if (data[i] === value) return true;
    }
  });

  if (filtered) dispatch(filterData(filtered[0]));
  else dispatch(filterData(null));

  dispatch(setText(value));
}

export function Input() {
  const $input = $('input');

  $input.addEventListener('input', (e: any) => {
    const {
      fetch: { data },
      form: { option },
    } = getState();
    const value = e.target.value;

    if (!option) {
      e.target.value = '';
      e.target.setAttribute('disabled', true);
      e.target.setAttribute('placeholder', 'Please select option');
      e.target.classList.toggle('error');
    }

    if (value && option) {
      e.target.setAttribute('placeholder', 'Please Input ASCII Code');
      changeState(value, data);
    }
  });
}
