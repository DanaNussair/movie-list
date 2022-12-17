import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovie, QueryParam } from "../api/MovieAPI";
import {
  MovieContainer,
  MovieDataWrapper,
  MoviePoster,
} from "../styles/MoviePageStyles";
import { MovieDataType } from "../types";

const MoviePage = () => {
  const { id: movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDataType>();

  useEffect(() => {
    movieId && getMovie(movieId, QueryParam.id, setMovieDetails);
  }, [movieId]);

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
