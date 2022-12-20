import axios, { AxiosError } from "axios";
import { getErrorMessage } from "./helpers";

const HOST = "http://www.omdbapi.com/";

export enum QueryParam {
  title = "t",
  id = "i",
}

export const searchMovies = async (searchTerm: string): Promise<any> => {
  try {
    const response = await axios.get(
      `${HOST}?apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}`
    );

    return {
      data: response?.data?.Search || [],
      error: null,
    };
  } catch (error) {
    const { response } = error as AxiosError;

    return {
      data: null,
      error: {
        status: response.status,
        message: response && getErrorMessage(response.status),
      },
    };
  }
};

export const getMovie = async (
  searchTerm: string,
  queryParam: QueryParam
): Promise<any> => {
  try {
    const response = await axios.get(
      `${HOST}?apikey=${process.env.REACT_APP_API_KEY}&${queryParam}=${searchTerm}`
    );
    return { data: response?.data, error: null };
  } catch (error) {
    const { response } = error as AxiosError;
    return {
      data: null,
      error: { message: response && getErrorMessage(response.status) },
    };
  }
};
