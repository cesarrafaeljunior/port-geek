import styled from "styled-components";

export const ContainerFirstLayout = styled.div`
    display: flex;
`

interface IHeader {
    seeInfo: boolean
}

export const HeaderFirstLayout = styled.header<IHeader>`
    position: fixed;
<<<<<<< Updated upstream
    z-index: 1;
    top: 0;
    left: ${(props) => props.seeInfo ? "0" : "-240px"};

    width: 280px;
    min-height: 100vh;
    
=======

    min-height: 100vh;

    top: 0;
    left: ${(props) => props.seeInfo ? "0" : "-180px"};

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        width: 250px;
=======
        width: 90%;
>>>>>>> Stashed changes

        margin-left: 6px;
    }

    .show-user-infos {
        position: absolute;

        top: 50%;
<<<<<<< Updated upstream
        transform: translateY(-50%);
        right: 4px;

        width: 30px;
        height: 30px;
        font-size: 100%;
=======
         transform: translateY(-50%);
        right: 0px;

        font-size: 2rem;
>>>>>>> Stashed changes

        background: none;
        border: none;
        color: white;
<<<<<<< Updated upstream
        
        padding: 0;
=======
>>>>>>> Stashed changes
    }

    @media (min-width: 800px) {
        & {
            position: sticky;

            left: 0;

            width: 25%;
<<<<<<< Updated upstream
            min-width: 280px;
        }

        .show-user-infos {
            /* display: none; */
=======
            min-width: 200px;
        }

        .show-user-infos {
            display: none;
>>>>>>> Stashed changes
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