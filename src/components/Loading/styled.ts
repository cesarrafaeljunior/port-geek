import styled from "styled-components";

export const LoadingDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;

    background-color: var(--color-grey-1);

    & > svg {
        animation: Rotate360 1s linear infinite;

        width: 10%;
        height: 10%;

        color: var(--color-primary);

        @keyframes Rotate360 {
            0% {
                transform: rotate(0);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`