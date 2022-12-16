import {
  MovieInfo,
  MovieItemWrapper,
  MoviePoster,
  MovieTitle,
  MovieYear,
} from "../styles/MovieItemStyles";
import { MovieItemType } from "../types";

const MovieItem = ({ movie }: { movie: MovieItemType }) => {
  return (
    <MovieItemWrapper>
      <MoviePoster src={movie.Poster} />
      <MovieInfo>
        <MovieTitle>{movie.Title}</MovieTitle>
        <MovieYear>Year: {movie.Year}</MovieYear>
      </MovieInfo>
    </MovieItemWrapper>
  );
};

export default MovieItem;
