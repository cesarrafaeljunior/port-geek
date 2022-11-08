import styled from "styled-components";

export const ContainerFirstLayout = styled.div`
    display: flex;
`

interface IHeader {
    seeInfo: boolean
}

export const HeaderFirstLayout = styled.header<IHeader>`
    position: fixed;

    min-height: 100vh;

    top: 0;
    left: ${(props) => props.seeInfo ? "0" : "-180px"};

    transition: 1s ease;

    background-color: #0F3267;
    color: white;

    .Container__UserIcon > figure {
        padding: 16px 0;

        & > img {
            display: block;
            margin: 0 auto;
        }
    }

    .Container__Contacts {
        padding: 1.25em 0.5em;

        flex-direction: column;
    }

    .div-infos {
        width: 90%;

        margin-left: 6px;
    }

    .show-user-infos {
        position: absolute;

        top: 50%;
         transform: translateY(-50%);
        right: 0px;

        font-size: 2rem;

        background: none;
        border: none;
        color: white;
    }

    @media (min-width: 800px) {
        & {
            position: sticky;

            left: 0;

            width: 25%;
            min-width: 200px;
        }

        .show-user-infos {
            display: none;
        }
    }
`

export const BodyFirstLayout = styled.main`
    background-color: #B6D1FA;

    min-height: 100vh;

    & > section {
        width: 95%;
        margin: 0 auto;

        & > h2 {
            padding: 16px 0;
        }

        & > p {
            background-color: white;

            padding: 8px;

            overflow-wrap: break-word;
        }
    }

    .user-project {
        .project-infos {
            min-height: 12rem;

            display: flex;
        }

        .project-image {
            width: 20%;
        }
    }

    @media (max-width: 800px) {
        & {
            padding-left: 40px;
        }
    }

    @media (min-width: 800px) {
        & {
            width: auto;
        }
    }
`