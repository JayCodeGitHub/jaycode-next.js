import styled from "styled-components";

export const OuterWrapper = styled.nav`
  height: 8rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.tertiary};
  padding: 0 5vw;
  color: ${({ theme }) => theme.white};
  padding: 0vw 10vw;
`;

export const StyledNavigation = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  list-style: none;
  height: 60%;
  padding: 0;
  flex-direction: row;
  width: 500px;
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
