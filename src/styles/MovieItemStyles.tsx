import styled from "styled-components";

export const MovieItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-bottom: 1px solid #001a76;
  z-index: 1;
  gap: 10px;
  padding: 13px;
  cursor: pointer;

  :hover {
    background-color: #e9edfd;
  }

  :last-child {
    border-bottom: none;
    padding-bottom: 19px;
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

interface TitleTextProps {
  isHighlighted: boolean;
}

export const TitleText = styled.span<TitleTextProps>`
  ${({ isHighlighted }) => (isHighlighted ? `color: #002ed1;` : ``)}
`;
