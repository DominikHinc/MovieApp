const DEMO_API_KEY = '537ca03eb6a299197faae1711d7e0f8a';

export const searchMovieByTitle = title => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${DEMO_API_KEY}&language=en-US&page=1&include_adult=false&query=${title}`;

  return new Promise((resolve, reject) => {
    const movieRequest = new XMLHttpRequest();
    movieRequest.open('GET', url, true);
    movieRequest.responseType = 'json';
    movieRequest.onload = () => {
      console.log(movieRequest.status);
      let status = movieRequest.status;
      if (status === 200) {
        resolve(movieRequest.response);
      } else {
        reject(movieRequest.response.errors[0]);
      }
    };
    movieRequest.send();
  });
};
