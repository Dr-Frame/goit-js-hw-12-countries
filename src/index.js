import './sass/styles.scss';
const _ = require('lodash');

import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import pnotifyPop from './js/components/pnotify';
import * as util from './js/update-articles-markup';

let arrayLength = 0;

refs.inputRef.addEventListener('input', _.debounce(handleQuerry, 500));
refs.inputRef.addEventListener('change', handleInputClear);
refs.btnRef.addEventListener('click', util.handleClearMarkup);

function handleQuerry(event) {
  util.handleClearMarkup();
  const query = event.target.value;

  fetchCountries(query)
    .then(data => {
      arrayLength = data.length;
      return data;
    })
    .then(data => {
      if (arrayLength >= 2 && arrayLength < 11) {
        util.updateCountryListMarkup(data);
      }
      if (arrayLength === 1) {
        util.updateCountryMarkup(data);
      }
      if (arrayLength >= 10) {
        pnotifyPop();
      }

      arrayLength = 0;
    });
}

function handleInputClear() {
  refs.inputRef.value = '';
}
