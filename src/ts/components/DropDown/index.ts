import { $ } from '../../utils';
import { IStore } from '../../types/store';
import { setOption } from '../../store/reducer';

export default function DropDown(store: IStore) {
  const { dispatch, getState } = store;
  const $dropdownWrapper = $('.dropdown-wrapper');
  const $dropdownMain = $('.dropdown-main');
  const $dropdownList = $('.dropdown-list');

  $dropdownWrapper.addEventListener('click', (e: any) => {
    e.currentTarget.classList.toggle('open');
  });

  $dropdownList.addEventListener('click', (e: any) => {
    e.preventDefault();

    const $cur = e.target;
    const $parent = $cur.parentElement;
    const $prev = $('.selected');
    const value = $cur.innerText;

    $dropdownMain.innerText = value;

    if ($prev) {
      $prev.classList.remove('selected');
    }

    $parent.classList.toggle('selected');

    dispatch(setOption(value));
  });
}
