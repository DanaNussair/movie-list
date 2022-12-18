import {
  useState,
  useEffect,
  useRef,
  MutableRefObject,
  useContext,
} from "react";
import {
  SearchInput,
  SearchContainer,
  SearchWrapper,
  InputIcon,
  ResultItems,
  NoResultsItem,
  SkeletonWrapper,
  SkeletonPoster,
  SkeletionInfo,
  SkeletionTitle,
  SkeletionYear,
} from "../styles/SearchStyles";
import { Magnifier } from "../assets";
import { searchMovies } from "../api/MovieAPI";
import { MovieItemType } from "../types";
import MovieItem from "./MovieItem";
import { AppError, ErrorContext } from "../contexts/ErrorContext";

const Search = () => {
  const [searchResults, setSearchResults] = useState<MovieItemType[] | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isListHidden, setIsListHidden] = useState<boolean>(!searchTerm);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchRef = useRef() as MutableRefObject<HTMLDivElement>;

  const { setError } = useContext(ErrorContext);

  useEffect(() => {
    // Will call the search API only when the user has stopped typing, to prevent multiple meaningless calls
    const timeOutId = setTimeout(() => {
      searchTerm
        ? searchMovies(searchTerm, setData)
        : setData({
            data: null,
            isHidden: true,
            isLoading: false,
          });
    }, 500);

    return () => clearTimeout(timeOutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const setData = ({
    data,
    isHidden = true,
    isLoading = false,
    error = null,
  }: {
    data: MovieItemType[] | null;
    isHidden?: boolean;
    isLoading?: boolean;
    error?: AppError | null;
  }) => {
    setSearchResults(data);
    setIsListHidden(isHidden);
    setIsLoading(isLoading);
    setError(error);
  };

  const handleClickOutside = (e: any) => {
    if (!searchRef.current.contains(e.target) || !searchTerm) {
      setIsListHidden(true);
    } else {
      setIsListHidden(false);
    }
  };

  const displaySkeletonLoader = () => {
    return (
      <ResultItems>
        <SkeletonWrapper>
          <SkeletonPoster />
          <SkeletionInfo>
            <SkeletionTitle />
            <SkeletionYear />
          </SkeletionInfo>
        </SkeletonWrapper>
      </ResultItems>
    );
  };

  const displaySearchResults = () => {
    if (isLoading) {
      return displaySkeletonLoader();
    }
    if (!isListHidden) {
      return (
        <ResultItems>
          {searchResults?.length ? (
            searchResults.map((movie) => (
              <MovieItem
                movie={movie}
                searchTerm={searchTerm}
                key={movie.imdbID}
              />
            ))
          ) : (
            <NoResultsItem>No results found</NoResultsItem>
          )}
        </ResultItems>
      );
    } else return null;
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
        {displaySearchResults()}
      </SearchWrapper>
    </SearchContainer>
  );
};

export default Search;
