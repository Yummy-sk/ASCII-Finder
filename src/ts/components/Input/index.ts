import { setText, dispatch, getState } from '../../store';
import { $ } from '../../utils';

export function Input() {
  const $input = $('input');

  $input.addEventListener('input', (e: any) => {
    const option = getState().form.option;
    const value = e.target.value;

    if (!option) {
      e.target.value = '';
      e.target.setAttribute('disabled', true);
      e.target.setAttribute('placeholder', 'Please select option');
      e.target.classList.toggle('error');
    }

    if (value && option) {
      e.target.setAttribute('placeholder', 'Please Input ASCII Code');
      dispatch(setText(value));
    }
  });
}
