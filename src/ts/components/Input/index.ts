import { setText, dispatch, getState, filterData } from '../../store';
import { $ } from '../../utils';
import { IData } from '../../types';

function debounce(
  callback: (e: Event) => void,
  delay: number,
  $resultSkeleton: HTMLElement,
  $resultWrapper: HTMLElement,
  $notFound: HTMLElement
) {
  let timerId: ReturnType<typeof setTimeout> | null;
  return (e: any) => {
    $resultWrapper.classList.remove('show');
    $notFound.style.display = 'none';

    if (!e.target.value) $resultSkeleton.style.display = 'none';
    else $resultSkeleton.style.display = 'block';

    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay, e);
  };
}

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
  const $resultWrapper = $('.result-wrapper');
  const $resultSkeleton = $('.result-skeleton');
  const $notFound = $('.not-found');

  $input.addEventListener(
    'input',
    debounce(
      (e: any) => {
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

          $resultSkeleton.style.display = 'none';

          const {
            fetch: { filtered },
          } = getState();

          if (filtered) {
            let html = '';

            for (let filter in filtered as IData) {
              if (filter !== 'Description' && filtered[filter]) {
                html += `
              <div class="result-box">
                <h3>${filter}</h3>
                <p>${filtered[filter]}</p>
              </div>
            `;
              }
            }

            $resultWrapper.classList.add('show');
            $resultWrapper.innerHTML = html;

            return;
          }

          if (!filtered && value !== '') {
            $notFound.style.display = 'block';

            return;
          }
        }
      },
      700,
      $resultSkeleton,
      $resultWrapper,
      $notFound
    )
  );
}
