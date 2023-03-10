import styled from "styled-components";

export interface HeaderProps {
  secondary?: boolean;
}

export const Wrapper = styled.header<HeaderProps>`
    width: 100%;
    height: ${({secondary}) => (secondary ? '35vh' : '70vh')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${({secondary}) => (secondary ? 'center' : 'flex-start')};
    h1 {
        color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.font.size.m};
        padding-left: 20px;
        display: flex;
        align-items: center;
        justify-content: ${({secondary}) => (secondary ? 'center' : 'flex-start')};
        margin: 2.5rem 0;
    }
    p {
      color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.font.size.s};
    }
    span {
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: row;
        button {
          margin-top: 2rem;
        }
    }
    ${({ theme }) => theme.mq.desktop}  {
        padding-left: ${({secondary}) => (secondary ? '0' : '15vw')};
        width: auto;
        height: ${({secondary}) => (secondary ? '20vh' : '70vh')};
        h1 {
            font-size: ${({ theme }) => theme.font.size.xxl};
            margin-bottom: 5rem;
        }
        p {
            font-size: ${({ theme }) => theme.font.size.xl};
            margin-bottom: 5rem;
        }
        span {
            padding-right: 20%;
            width: auto;
            align-items: center;
            padding: 0;
            button {
                margin-top: 0;
            }
         }
    }
`