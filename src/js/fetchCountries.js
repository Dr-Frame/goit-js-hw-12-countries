function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.status);
  });
}

export default fetchCountries;
