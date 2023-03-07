import Link from "next/link";
import {
  OuterWrapper,
  StyledNavigation,
  Wrapper,
  LogoWrapper,
} from "./navbar.styles";

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
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </StyledNavigation>
      </Wrapper>
    </OuterWrapper>
  );
}
