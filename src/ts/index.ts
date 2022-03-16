import { $ } from './utils';
import { createStore, reducer } from './store';
import DropDown from './components/DropDown';

const store = createStore(reducer);

DropDown($('.dropdown'));
