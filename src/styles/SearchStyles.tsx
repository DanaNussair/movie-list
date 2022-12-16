import styled from "styled-components";
import { MovieItemType } from "../types";

export const SearchContainer = styled.div`
  display: flex;
  background-color: #001a76;
  height: 151px;
  justify-content: center;
  align-items: center;
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 35%;
  height: 60px;
`;

interface Props {
  searchResults: MovieItemType[];
  isListHidden: boolean;
}

export const SearchInput = styled.input<Props>`
  position: absolute;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding-left: 60px;
  padding-right: 20px;
  border-radius: 41px;
  border: none;
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
