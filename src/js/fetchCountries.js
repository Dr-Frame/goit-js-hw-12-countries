function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/{name}`;
}

/* const apiKey = 'ff05cd3977a2493a809452f333bdf4f6';

export default {
  searchQuerry: '',
  page: 1,
  fetchArticles() {
    const url = `https://newsapi.org/v2/everything?q=${this.searchQuerry}&language=en&pageSize=4&page=${this.page}`;
    const options = {
      headers: {
        Authorization: apiKey,
      },
    };

    return fetch(url, options)
      .then(res => res.json())
      .then(({ articles }) => {
        this.page += 1;
        return articles;
      })
      .catch(error => console.log(error));
  },
  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuerry;
  },

  set query(value) {
    this.searchQuerry = value;
  },
}; */
