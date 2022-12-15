import AppLogoSvg from "./app-logo.svg";
import MagnifierSvg from "./magnifier.svg";
import NotFoundSvg from "./not-found.svg";
import SearchMoviesSvg from "./search-movies.svg";

const SvgToImg = (svg: string, alt: string) => {
  return <img src={svg} alt={alt} />;
};

export const AppLogo = SvgToImg(AppLogoSvg, "app-logo");
export const Magnifier = SvgToImg(MagnifierSvg, "magnifier");
export const NotFound = SvgToImg(NotFoundSvg, "not-found");
export const SearchMovies = SvgToImg(SearchMoviesSvg, "search-movies");
