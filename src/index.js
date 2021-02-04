import './sass/styles.scss';
const _ = require('lodash');
import countryTpl from './templates/country.hbs';
import countryListTpl from './templates/country-list.hbs';

//Pnotify
import { info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as Confirm from '@pnotify/confirm';
import '@pnotify/confirm/dist/PNotifyConfirm.css';

let arrayLength = 0;

const refs = {
  inputRef: document.querySelector('.js-query'),
  countryContainerRef: document.querySelector('.country-list'),
};

refs.inputRef.addEventListener('keydown', _.debounce(handleQuerry, 500));

function handleQuerry(event) {
  refs.countryContainerRef.innerHTML = '';
  const query = event.target.value;

  fetchCountries(query).then(data => {
    if (arrayLength >= 2 && arrayLength < 11) {
      updateCountryListMarkup(data);
    }
    if (arrayLength === 1) {
      updateCountryMarkup(data);
    }
    if (arrayLength >= 10) {
      pnotifyPop();
    }

    arrayLength = 0;
  });
}

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      arrayLength = data.length;
      return data;
    });
}

function updateCountryMarkup(country) {
  const markup = countryTpl(country);
  refs.countryContainerRef.insertAdjacentHTML('beforeend', markup);
}

function updateCountryListMarkup(country) {
  const markup = countryListTpl(country);
  refs.countryContainerRef.insertAdjacentHTML('afterbegin', markup);
}

function pnotifyPop() {
  info({
    title: 'Ошибка',
    text: 'Найдено слишком много резульаттов,пожалуйста уточните свой запрос',
    modules: new Map([
      [
        Confirm,
        {
          confirm: true,
          buttons: [
            {
              text: 'Ok',
              primary: true,
              click: notice => {
                notice.close();
              },
            },
          ],
        },
      ],
    ]),
  });
}
