import { createStore, reducer } from './store';
import DropDown from './components/DropDown';

const store = createStore(reducer);

store.subscribe(() => DropDown(store));
