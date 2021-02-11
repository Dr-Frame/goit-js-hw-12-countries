import './sass/styles.scss';
const _ = require('lodash');

import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import * as util from './js/update-articles-markup';
import pnotifyPop from './js/components/pnotify';

refs.inputRef.addEventListener('input', _.debounce(handleQuerry, 500));
refs.inputRef.addEventListener('change', handleInputClear);
refs.btnRef.addEventListener('click', util.handleClearMarkup);

function handleQuerry(event) {
  util.handleClearMarkup();
  const query = event.target.value;

  if (query === '') {
    return;
  }

  fetchCountries(query)
    .then(data => {
      if (data.length >= 2 && data.length < 11) {
        util.updateCountryListMarkup(data);
      }
      if (data.length === 1) {
        util.updateCountryMarkup(data);
      }
      if (data.length >= 10) {
        pnotifyPop();
      }
    })
    .catch(error => console.log(error));
}

function handleInputClear() {
  refs.inputRef.value = '';
}
