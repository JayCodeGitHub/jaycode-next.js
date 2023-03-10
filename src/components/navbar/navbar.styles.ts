import styled from 'styled-components';

export interface HamburgerProps {
  isOpen: boolean;
}

export const OuterWrapper = styled.nav`
  height: 8rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
  color: ${({ theme }) => theme.white};
  padding: 0vw 10vw;
`;

export const StyledNavigation = styled.ul`
  display: none;
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    list-style: none;
    height: 60%;
    padding: 0;
    flex-direction: row;
    width: 500px;
  }
`;

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  z-index: 10;
  a {
    color: inherit;
    text-decoration: none;
    font-size: ${({ theme }) => theme.font.size.s};
    span {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const HamburgerWrapper = styled.button`
  display: flex;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  z-index: 10;
  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

export const Hamburger = styled.div<HamburgerProps>`
  transition: background-color 0.15s 0.05s ease-in-out;
  background-color: ${({ isOpen, theme }) => (isOpen ? 'transparent' : theme.white)};
  width: 3rem;
  height: 0.2rem;
  border: none;
  padding: 0;
  &:before {
    content: '';
    width: 3rem;
    height: 0.2rem;
    background-color: white;
    display: block;
    transition: transform 0.15s 0.05s ease-in-out;
    transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-1rem')}) rotate(${({ isOpen }) => (isOpen ? '45deg' : '0deg')});
  }
  &:after {
    content: '';
    width: 3rem;
    height: 0.2rem;
    background-color: white;
    display: block;
    transition: transform 0.15s 0.05s ease-in-out;
    transform: translateY(${({ isOpen }) => (isOpen ? '-0.2rem' : '0.8rem')}) rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0deg')});
  }
`;

export const StyledMobileNavigation = styled.div<HamburgerProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.tertiary};
  padding: 20vh 0 0 0;
  transition: transform 0.1s ease-in-out;
  transform: translateY('+100%');
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '+100%')});
  ul {
    padding: 0;
    width: 100%;
    height: 70%;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
`;