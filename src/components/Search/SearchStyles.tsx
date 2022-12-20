import styled, { keyframes } from "styled-components";
import { MovieItemType } from "../../types";

interface Props {
  ref?: React.MutableRefObject<HTMLDivElement>;
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
  searchResults: MovieItemType[] | null;
  isListHidden: boolean;
  isLoading: boolean;
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

  ${({ searchResults, isLoading, isListHidden }) =>
    ((searchResults && !isListHidden) || isLoading) &&
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

export const NoResultsItem = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  color: #9c9c9c;
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 13px;
`;

const AnimateBG = keyframes`
  to {
    background-position: 300px 0, 0 0, 0 190px, 50px 195px;
  }
`;

export const SkeletonPoster = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 10px;
  background-size: 300px 300px;
  background-image: linear-gradient(90deg, #e2e2e2 50%, #ebebeb 100%);
  animation: ${AnimateBG} 1s ease infinite;
`;

export const SkeletionInfo = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const SkeletionTitle = styled.div`
  height: 24px;
  border-radius: 10px;
  background-color: #e2e2e2;
  background-size: 300px 300px;
  background-image: linear-gradient(90deg, #e2e2e2 0%, #ebebeb 100%);
  animation: ${AnimateBG} 1s ease infinite;
`;

export const SkeletionYear = styled.div`
  width: 40%;
  height: 24px;
  border-radius: 10px;
  background-color: #e2e2e2;
  background-size: 300px 300px;
  background-image: linear-gradient(90deg, #e2e2e2 0%, #ebebeb 100%);
  animation: ${AnimateBG} 1s ease infinite;
`;
