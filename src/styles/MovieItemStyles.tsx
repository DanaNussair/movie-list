import styled from "styled-components";

export const MovieItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  position: relative;
  background-color: white;
  width: 100%;
  top: 60px;
  border: 1px solid #001a76;
  z-index: 1;
  gap: 10px;
  padding: 11px;
  cursor: pointer;

  :last-child {
    border-radius: 0px 0px 41px 41px;
  }
`;

export const MoviePoster = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 10px;
  object-fit: cover;
  object-position: 100% 0;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const MovieTitle = styled.div`
  font-weight: bold;
`;

export const MovieYear = styled.div``;
