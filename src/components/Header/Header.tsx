import { AppLogo } from "../../assets";
import {
  HeaderContainer,
  NavigationContainer,
  NavigationItem,
} from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderContainer>
      {AppLogo}
      <NavigationContainer>
        <NavigationItem href="/">Home</NavigationItem>
        <NavigationItem href="/movies">Movies</NavigationItem>
        <NavigationItem href="/about">About</NavigationItem>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
