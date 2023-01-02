const API_KEY = '54c00021c1f0a4ca812033181f98909b';

export function ApiFetch() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  ).then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    return Promise.reject(new Error(`Oops, you have some error`));
  });
}

export function ApiFetchName(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  ).then(resp => {
    if (resp.ok) {
      return resp.json();
    }

    alert(`Oops, you have some error`);

    return Promise.reject(new Error(`Oops, you have some error`));
  });
}

export function ApiFetchCast(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  ).then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    alert(`Oops, you have some error`);
    return Promise.reject(new Error(`Oops, you have some error`));
  });
}

export function ApiFetchReviews(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  ).then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    alert(`Oops, you have some error`);
    return Promise.reject(new Error(`Oops, you have some error`));
  });
}

export function ApiFetchQuery(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
  ).then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    alert(`Oops, you have some error`);
    return Promise.reject(new Error(`There are no movies for your request`));
  });
}
