import {
  SearchInput,
  SearchContainer,
  SearchWrapper,
  InputIcon,
} from "../styles/SearchStyles";
import { Magnifier } from "../assets";

const Search = () => {
  return (
    <SearchContainer>
      <SearchWrapper>
        <InputIcon>{Magnifier}</InputIcon>
        <SearchInput type="text" placeholder="Search"></SearchInput>
      </SearchWrapper>
    </SearchContainer>
  );
};

export default Search;
