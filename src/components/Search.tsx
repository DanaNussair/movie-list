import { useState } from "react";
import {
  SearchInput,
  SearchContainer,
  SearchWrapper,
  InputIcon,
} from "../styles/SearchStyles";
import { Magnifier } from "../assets";
import { searchMovies } from "../api/MovieAPI";
import { MovieItemType } from "../types";
import MovieItem from "./MovieItem";

const Search = () => {
  const [searchResults, setSearchResults] = useState<MovieItemType[]>([]);
  const [isListHidden, setIsListHidden] = useState(false);

  return (
    <SearchContainer>
      <SearchWrapper
        onBlur={() => setIsListHidden(true)}
        onFocus={() => setIsListHidden(false)}
      >
        <InputIcon>{Magnifier}</InputIcon>
        <SearchInput
          type="text"
          placeholder="Search"
          name="Search"
          onChange={(event) =>
            searchMovies(event.target.value, setSearchResults)
          }
        />
        {searchResults.length &&
          !isListHidden &&
          searchResults.map((movie) => (
            <MovieItem movie={movie} key={movie.imdbID} />
          ))}
      </SearchWrapper>
    </SearchContainer>
  );
};

export default Search;
