import { useNavigate } from "react-router-dom";

import {
  MovieInfo,
  MovieItemWrapper,
  MoviePoster,
  TitleText,
} from "../styles/MovieItemStyles";
import { MovieItemType } from "../types";

const MovieItem = ({
  movie,
  searchTerm,
}: {
  movie: MovieItemType;
  searchTerm: string;
}) => {
  const navigate = useNavigate();
  const trimmedTerm = searchTerm.trim();
  const titleArray = movie.Title.split(new RegExp(`(${trimmedTerm})`, "gi"));

  const displayTitle = () => {
    return titleArray.map((part, index) => {
      const isHighlighted = part.toLowerCase() === trimmedTerm.toLowerCase();
      return (
        <TitleText key={index} isHighlighted={isHighlighted}>
          {part}
        </TitleText>
      );
    });
  };

  return (
    <MovieItemWrapper onClick={() => navigate(`/movies/${movie.imdbID}`)}>
      <MoviePoster src={movie.Poster} />
      <MovieInfo>
        <strong>{displayTitle()}</strong>
        <div>Year: {movie.Year}</div>
      </MovieInfo>
    </MovieItemWrapper>
  );
};

export default MovieItem;
