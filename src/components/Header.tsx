import { AppLogo } from "../assets";
import {
  HeaderContainer,
  NavigationContainer,
  NavigationItem,
} from "../styles/HeaderStyles";

const Header = () => {
  return (
    <HeaderContainer>
      {AppLogo}
      <NavigationContainer>
        <NavigationItem>Home</NavigationItem>
        <NavigationItem>Movies</NavigationItem>
        <NavigationItem>About</NavigationItem>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
