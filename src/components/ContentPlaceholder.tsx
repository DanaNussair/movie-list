import { SearchMovies } from "../assets";
import { ContentWrapper, PlaceholderText } from "../styles/ContentStyles";

const ContentPlaceholder = () => {
  return (
    <ContentWrapper>
      {SearchMovies}
      <PlaceholderText>Search to display movies</PlaceholderText>
    </ContentWrapper>
  );
};

export default ContentPlaceholder;
