import styled from "styled-components";

export const Wrapper = styled.main`
     padding: 2.5vw;
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 2.5vw 15vw;
    }
`