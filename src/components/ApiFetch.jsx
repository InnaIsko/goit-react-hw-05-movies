export const ApiFetch = API_KEY => {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  ).then(resp => resp.json());
};
