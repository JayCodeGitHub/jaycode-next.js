import { useState } from 'react';
import Link from 'next/link';
import {
  OuterWrapper,
  StyledNavigation,
  Wrapper,
  LogoWrapper,
  HamburgerWrapper,
  Hamburger,
  StyledMobileNavigation,
} from './navbar.styles';
import NavLink from '../NavLink/NavLink';
import { NavigationItems } from '../../assets/items/NavigationItems/NavigationItems';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavigation = () => setIsOpen(!isOpen);
  const setIsOpenFalse = () => setIsOpen(false);
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
              <NavLink href={item.href} onClick={setIsOpenFalse}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </StyledNavigation>
        <HamburgerWrapper onClick={toggleNavigation}>
          <Hamburger isOpen={isOpen} />
        </HamburgerWrapper>
      </Wrapper>
      <StyledMobileNavigation isOpen={isOpen}>
        <ul>
          {NavigationItems.map((item) => (
            <li key={item.name}>
              <NavLink href={item.href} onClick={setIsOpenFalse}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </StyledMobileNavigation>
    </OuterWrapper>
  );
}
