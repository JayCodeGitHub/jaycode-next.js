import Link from "next/link";
import {
  OuterWrapper,
  StyledNavigation,
  Wrapper,
  LogoWrapper,
  HamburgerWrapper,
  Hamburger,
  StyledMobileNavigation,
} from "./navbar.styles";
import NavLink from "../NavLink/NavLink";
import { NavigationItems } from "../../assets/items/NavigationItems/NavigationItems";

export default function Navbar() {
  return (
    <OuterWrapper>
      <Wrapper>
        <LogoWrapper>
          <Link href="/">
            Jay<span>Code</span>
          </Link>
        </LogoWrapper>
        <StyledNavigation>
          {NavigationItems.map((item) => (
            <li key={item.name}>
              <NavLink href={item.href}>{item.name}</NavLink>
            </li>
          ))}
        </StyledNavigation>
        <HamburgerWrapper>
          <Hamburger />
        </HamburgerWrapper>
      </Wrapper>
      <StyledMobileNavigation>
        <ul>
          {NavigationItems.map((item) => (
            <li key={item.name}>
              <NavLink href={item.href}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </StyledMobileNavigation>
    </OuterWrapper>
  );
}
