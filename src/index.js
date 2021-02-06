import './sass/styles.scss';
const _ = require('lodash');

import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import * as util from './js/update-articles-markup';

refs.inputRef.addEventListener('input', _.debounce(handleQuerry, 500));
refs.inputRef.addEventListener('change', handleInputClear);
refs.btnRef.addEventListener('click', util.handleClearMarkup);

function handleQuerry(event) {
  util.handleClearMarkup();
  const query = event.target.value;

  if (query === '') {
    return;
  }

  fetchCountries(query);
}

function handleInputClear() {
  refs.inputRef.value = '';
}
