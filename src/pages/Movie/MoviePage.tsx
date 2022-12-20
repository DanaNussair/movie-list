import { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import { getMovie, QueryParam } from "../../api/MovieAPI";
import { AppError, ErrorContext } from "../../contexts/ErrorContext";
import {
  MovieContainer,
  MovieDataWrapper,
  MoviePoster,
} from "./MoviePageStyles";
import { MovieDataType } from "../../types";

const MoviePage = () => {
  const { id: movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDataType>();
  const { setError } = useContext(ErrorContext);

  useEffect(() => {
    handleGetMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const setData = ({
    data,
    error = null,
  }: {
    data: MovieDataType;
    error?: AppError | null;
  }) => {
    setMovieDetails(data);
    setError(error);
  };

  const handleGetMovie = async () => {
    if (movieId) {
      const response = await getMovie(movieId, QueryParam.id);
      setData({ ...response });
    }
  };

  return (
    <MovieContainer>
      <MoviePoster src={movieDetails?.Poster} alt="movie-poster" />
      <MovieDataWrapper>
        <strong>{movieDetails?.Title}</strong>
        <div>Year: {movieDetails?.Year}</div>
        <div>Genre: {movieDetails?.Genre}</div>
        <div>Plot: {movieDetails?.Plot}</div>
        <div>IMDB Rating: {movieDetails?.imdbRating}</div>
      </MovieDataWrapper>
    </MovieContainer>
  );
};

export default MoviePage;
