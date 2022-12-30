const API_KEY = '54c00021c1f0a4ca812033181f98909b';

export function ApiFetch() {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  ).then(resp => resp.json());
}

export function ApiFetchName(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  ).then(resp => resp.json());
}

export function ApiFetchCast(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  ).then(resp => resp.json());
}

export function ApiFetchReviews(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  ).then(resp => resp.json());
}
