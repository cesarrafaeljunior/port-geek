import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyle = createGlobalStyle`

    /****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: (11) 9-7749-2121
    Name: Final Project
    Description: Projeto Front-end
    ~ *   Root CSS - Global styles   * ~

            Version: 1.0

    ****************************************/

  :root{
    /* Colors */
    --color-primary: #FFCF5C;
    --color-secondary: #BA110C;
    --color-tertiary: #730039;
    --color-quartenary: #CBA135;
    --color-quinternary: #1D1D1F;

    --color-feedback-negative: #E83F5B;
    --color-feedback-warning: #ffcd07;
    --color-feedback-success: #3FE864;
    --color-feedback-info: #155bcb;

    --color-grey-0: #F5F5F5;
    --color-grey-1: #ECECEC;
    --color-grey-2: #565656;
    --color-grey-3: #121214;
    --color-grey-opacity: rgba(33, 37, 41, 0.5);
    
    --color-navigation: #22252A;
    --blur-effect-01: rgba( 31, 38, 135, 0.37 );
    --blur-effect-02: rgba( 2, 2, 2, 0.6 );
    --button-color-green: #69F579;
    --button-color-red: #EB4946;

    --color-shadow-box: rgba(0, 0, 0, 0.05);
    --color-shadow-box-01: #ff8000;
    --color-black-mode: #000000;
    --color-white-mode: #FFFFFF;
    --color-transparent: #00000090;
    --color-transparent-01: rgba( 255, 255, 255, 0.18 );

    --font-color: #000000;

    /*LayoutsColor*/

    /*Layout-2*/
    --colorPrimaryL2:#393939;
    --colorSecundaryL2:#efefef;
    --titleLayout2: #E4E1E1;

    /*Layout-3*/
    --colorPrimaryL3:#09002D;
    --colorSecundaryL3:#A52F2F;
    --titleLayout: #E4E1E1;
    
    /* Size Elements */
    --button-height-default: 48px;
    --button-height-medium: 40px;
    --button-height-little: 32px;
    --container-width: 1200px;

    /* Padding */
    --padding-8: 8px;

    /* Font Family */
    --font-primary-nunito: 'Nunito';
    --font-secondary-inter: 'Inter',sans-serif;

    /*  Text Sizes */
    --font-grand-60: 3.875rem;
    --font-grand-58: 3.75rem;
    --font-grand-56: 3.625rem;
    --font-grand-54: 3.5rem;
    --font-grand-52: 3.25rem;
    --font-grand-50: 3.125rem;
    --font-title-48: 3rem;
    --font-title-46: 2.875rem;
    --font-title-44: 2.75rem;
    --font-title-42: 2.625rem;
    --font-title-40: 2.5rem;
    --font-subtitle-38: 2.375rem;
    --font-subtitle-36: 2.25rem;
    --font-subtitle-34: 2.125rem;
    --font-subtitle-32: 2rem;
    --font-subtitle-30: 1.875rem;
    --font-subtitle-28: 1.75rem;
    --font-subtitle-24: 1.5rem;
    --font-subtitle-20: 1.25rem;
    --font-subtitle-18: 1.125rem;
    --font-text-16: 1rem;
    --font-text-14: 0.875rem;
    --font-text-12: 0.75rem;
    --font-text-10: 0.625rem;

    /* Line-Height */
    --font-line-height-40: 40px;
    --font-line-height-38: 38px;
    --font-line-height-32: 32px;
    --font-line-height-28: 28px;
    --font-line-height-24: 24px;
    --font-line-height-20: 20px;
    --font-line-height-16: 16px;


    /*  Text Weight */
    --font-weight-700: 700;
    --font-weight-600: 600;
    --font-weight-500: 500;
    --font-weight-400: 400;
    --font-weight-500: 300;
    
    /*  Border Radius */
    --radius-16: 16px;
    --radius-12: 12px;
    --radius-10: 10px;
    --radius-8: 8px;
    --radius-6: 6px;
    --radius-4: 4px;
    --radius-2: 2px;
    --radius-half: 50%;

    /* Gap */
    --gap-32: 32px;
    --gap-28: 28px;
    --gap-24: 24px;
    --gap-20: 20px; 
    --gap-16: 16px; 
    --gap-8: 8px; 
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, input, textarea, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button, select {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;;
        vertical-align: baseline;
        outline: none;
        font-family: var(--font-secondary-inter);
    }

    textarea {
        resize: none;
    }

    button {
        cursor: pointer;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    * {
        box-sizing: border-box;
    }
`;
export default GlobalStyle;
