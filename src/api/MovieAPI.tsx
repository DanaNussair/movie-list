const HOST = "http://www.omdbapi.com/";

enum queryParam {
  "t",
  "i",
}

export const searchMovies = async (
  searchTerm: string,
  setData: Function
): Promise<any> => {
  const response = await fetch(
    `${HOST}?apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}`
  );
  const body = await response.json();
  setData(body?.Search || []);
};

export const getMovie = async (
  searchTerm: string,
  queryParam: queryParam,
  setData: Function
): Promise<any> => {
  const response = await fetch(
    `${HOST}?apikey=${process.env.REACT_APP_API_KEY}&${queryParam}=${searchTerm}`
  );
  const body = await response.json();
  setData(body || {});
};
