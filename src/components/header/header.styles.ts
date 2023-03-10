import styled from "styled-components";

export interface HeaderProps {
  secondary?: boolean;
}

export const Header = styled.header<HeaderProps>`
    align-items: center;
    justify-content: ${({secondary}) => (secondary ? 'center' : 'flex-start')};
    width: 100%;
    height: ${({secondary}) => (secondary ? '20vh' : '60vh')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${({secondary}) => (secondary ? 'center' : 'flex-start')};
    padding-left: ${({secondary}) => (secondary ? '0' : '15vw')};
    h1 {
        color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.font.size.xxl};
        padding-left: 20px;
        display: flex;
        align-items: center;
        justify-content: ${({secondary}) => (secondary ? 'center' : 'flex-start')};
        margin: 5rem 0;
    }
    p {
        color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.font.size.xl};
    }
    div {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: row;
        padding-left: 2rem;
            button {
              margin-top: 2rem;
            }
         }
`