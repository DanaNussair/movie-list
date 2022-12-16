import {
  MovieInfo,
  MovieItemWrapper,
  MoviePoster,
  MovieTitle,
  MovieYear,
} from "../styles/MovieItemStyles";
import { MovieItemType } from "../types";

const MovieItem = ({ movie }: { movie: MovieItemType }) => {
  const navigateToMoviePage = (movieId: string) => {
    window.location.pathname = `/movies/${movieId}`;
  };

  return (
    <MovieItemWrapper onClick={() => navigateToMoviePage(movie.imdbID)}>
      <MoviePoster src={movie.Poster} />
      <MovieInfo>
        <MovieTitle>{movie.Title}</MovieTitle>
        <MovieYear>Year: {movie.Year}</MovieYear>
      </MovieInfo>
    </MovieItemWrapper>
  );
};

export default MovieItem;
