import pnotifyPop from './components/pnotify';
import * as util from './update-articles-markup';

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(response.status);
    })
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

export default fetchCountries;
