import refs from './refs';
import countryTpl from '../templates/country.hbs';
import countryListTpl from '../templates/country-list.hbs';

export function updateCountryMarkup(country) {
  const markup = countryTpl(country);
  refs.countryContainerRef.insertAdjacentHTML('beforeend', markup);
}

export function updateCountryListMarkup(country) {
  const markup = countryListTpl(country);
  refs.countryContainerRef.insertAdjacentHTML('afterbegin', markup);
}

export function handleClearMarkup() {
  refs.countryContainerRef.innerHTML = '';
}
