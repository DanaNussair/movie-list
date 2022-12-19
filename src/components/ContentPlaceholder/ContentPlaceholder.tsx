import { SearchMovies } from "../../assets";
import { ContentWrapper, PlaceholderText } from "./ContentStyles";

const ContentPlaceholder = () => {
  return (
    <ContentWrapper>
      {SearchMovies}
      <PlaceholderText>Search to display movies</PlaceholderText>
    </ContentWrapper>
  );
};

export default ContentPlaceholder;
