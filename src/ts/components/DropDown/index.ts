import { $ } from '../../utils';
import { IStore } from '../../types/store';
import { setOption, dispatch, getState } from '../../store';

export function DropDown() {
  const $dropdownWrapper = $('.dropdown-wrapper');
  const $dropdownMain = $('.dropdown-main');
  const $dropdownList = $('.dropdown-list');

  $dropdownMain.addEventListener('click', () => {
    $dropdownWrapper.classList.toggle('open');
  });

  $dropdownList.addEventListener('click', (e: any) => {
    const $cur = e.target;
    const $parent = $cur.parentElement;
    const $prev = $('.selected');
    const value = $cur.innerText;

    $dropdownMain.innerText = value;

    if ($prev) {
      $prev.classList.remove('selected');
    }

    $parent.classList.toggle('selected');

    if (value) {
      dispatch(setOption(value));
      console.log(getState());
    }

    $dropdownWrapper.classList.toggle('open', false);
  });

  $dropdownWrapper.addEventListener('blur', () => {
    console.log('ds');
    // $dropdownWrapper.classList.toggle('open');
  });
}
