import axios, { AxiosError } from "axios";
import { getErrorMessage } from "./helpers";

const HOST = "http://www.omdbapi.com/";

export enum QueryParam {
  title = "t",
  id = "i",
}

export const searchMovies = async (
  searchTerm: string,
  setData: Function
): Promise<any> => {
  try {
    setData({ isHidden: false, isLoading: true });
    const data = (
      await axios.get(
        `${HOST}?apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}`
      )
    ).data;
    setData({
      data: data?.Search,
      isHidden: false,
      isLoading: false,
      error: null,
    });
  } catch (error) {
    const { response } = error as AxiosError;
    const error_message = response && getErrorMessage(response.status);
    setData({
      data: null,
      error: { message: error_message },
      isLoading: false,
      isHidden: true,
    });
  }
};

export const getMovie = async (
  searchTerm: string,
  queryParam: QueryParam,
  setData: Function
): Promise<any> => {
  try {
    const data = (
      await axios.get(
        `${HOST}?apikey=${process.env.REACT_APP_API_KEY}&${queryParam}=${searchTerm}`
      )
    ).data;
    setData({ data: data, error: null });
  } catch (error) {
    const { response } = error as AxiosError;
    const error_message = response && getErrorMessage(response.status);
    setData({
      data: null,
      error: { message: error_message },
    });
  }
};
