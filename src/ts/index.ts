import { DropDown, Input } from './components';
import { dispatch, getData, getState } from './store';

(async function init() {
  await dispatch(getData());
  DropDown();
  Input();
})();

// store.subscribe(() => DropDown(store));
// store.subscribe(() => Input(store));
