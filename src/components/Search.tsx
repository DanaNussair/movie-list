import { useState, useEffect, useRef, MutableRefObject } from "react";
import {
  SearchInput,
  SearchContainer,
  SearchWrapper,
  InputIcon,
  ResultItems,
} from "../styles/SearchStyles";
import { Magnifier } from "../assets";
import { searchMovies } from "../api/MovieAPI";
import { MovieItemType } from "../types";
import MovieItem from "./MovieItem";

const Search = () => {
  const [searchResults, setSearchResults] = useState<MovieItemType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isListHidden, setIsListHidden] = useState(false);
  const searchRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    // Will call the search API only when the user has stopped typing, to prevent multiple meaningless calls
    const timeOutId = setTimeout(() => {
      searchMovies(searchTerm, setSearchResults);
    }, 500);

    return () => clearTimeout(timeOutId);
  }, [searchTerm]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const handleClickOutside = (e: any) => {
    if (!searchRef.current.contains(e.target)) {
      setIsListHidden(true);
    } else {
      setIsListHidden(false);
    }
  };

  return (
    <SearchContainer>
      <SearchWrapper
        ref={searchRef}
        onClick={(event) => handleClickOutside(event)}
      >
        <InputIcon>{Magnifier}</InputIcon>
        <SearchInput
          type="text"
          placeholder="Search"
          name="Search"
          onChange={(event) => setSearchTerm(event.target.value)}
          searchResults={searchResults}
          isListHidden={isListHidden}
        />
        {searchResults.length && !isListHidden && (
          <ResultItems>
            {searchResults.map((movie) => (
              <MovieItem
                movie={movie}
                searchTerm={searchTerm}
                key={movie.imdbID}
              />
            ))}
          </ResultItems>
        )}
      </SearchWrapper>
    </SearchContainer>
  );
};

export default Search;
