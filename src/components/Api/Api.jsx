const BASE__URL = 'https://pixabay.com/api/';
const API__KEY = '33191219-dc41095899386e0adcb39eb2c';

async function fetchQuery(searchQuery, page) {
  return fetch(
    `${BASE__URL}?key=${API__KEY}&q=${searchQuery}
      &image_type=photo&orientation=horizontal&page=
      ${page}&per_page=12`
  ).then(response => response.json());
}

const api = { fetchQuery };

export default api;
