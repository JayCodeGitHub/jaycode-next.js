import Link from "next/link";
import {
  OuterWrapper,
  StyledNavigation,
  Wrapper,
  LogoWrapper,
} from "./navbar.styles";
import NavLink from "../NavLink/NavLink";

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
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/experience">Experience</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </StyledNavigation>
      </Wrapper>
    </OuterWrapper>
  );
}
