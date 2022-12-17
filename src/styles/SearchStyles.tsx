import styled from "styled-components";
import { MovieItemType } from "../types";

interface Props {
  ref: React.MutableRefObject<HTMLDivElement>;
}
export const SearchContainer = styled.div`
  display: flex;
  background-color: #001a76;
  height: 151px;
  justify-content: center;
  align-items: center;
`;

export const SearchWrapper = styled.div<Props>`
  position: relative;
  width: 35%;
  height: 60px;
`;

interface SearchInputProps {
  searchResults: MovieItemType[];
  isListHidden: boolean;
}

export const SearchInput = styled.input<SearchInputProps>`
  position: absolute;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding-left: 60px;
  padding-right: 20px;
  border-radius: 41px;
  border: 1px solid #001a76;
  border-bottom: none;
  font-size: 20px;
  font-weight: bold;

  ::placeholder {
    color: #090000;
    opacity: 0.14;
  }
  :focus,
  :hover {
    outline: none;
  }

  ${({ searchResults, isListHidden }) =>
    searchResults.length &&
    !isListHidden &&
    `border-radius: 30px 30px 0px 0px;`}
`;

export const InputIcon = styled.div`
  position: absolute;
  margin: 16px;
  width: 29px;
  height: 29px;
  z-index: 1;
`;

export const ResultItems = styled.div`
  position: relative;
  box-sizing: border-box;
  top: 60px;
  max-height: 292px;
  overflow-y: overlay;
  border-radius: 0px 0px 41px 41px;
  border: 1px solid #001a76;
  background-color: white;

  ::-webkit-scrollbar {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-button {
    height: 25px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #879eed;
    border-radius: 10px;
  }
`;
