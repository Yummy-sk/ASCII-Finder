import { setText, dispatch, getState } from '../../store';
import { $ } from '../../utils';

export function Input() {
  const $input = $('input');

  $input.addEventListener('input', (e: any) => {
    const value = e.target.value;

    if (value) {
      dispatch(setText(value));
      console.log(getState());
    }
  });
}
