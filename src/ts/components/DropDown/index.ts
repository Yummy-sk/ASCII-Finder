import { $ } from '../../utils';

export default function DropDown($target: HTMLElement) {
  const $dropdownWrapper = $('.dropdown-wrapper');
  const $dropdownMain = $('.dropdown-main');
  const $dropdownList = $('.dropdown-list');

  $dropdownWrapper.addEventListener('click', (e: any) => {
    e.currentTarget.classList.toggle('open');
  });

  $dropdownList.addEventListener('click', (e: any) => {
    const $cur = e.target;
    const $parent = $cur.parentElement;
    const $prev = $('.selected');

    $dropdownMain.innerText = $cur.innerText;

    if ($prev) {
      $prev.classList.remove('selected');
    }

    $parent.classList.toggle('selected');
  });
}
