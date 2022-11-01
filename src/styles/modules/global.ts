import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    /****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: (11) 9-7749-2121
    Name: Entrega - Kenziehub - Parte 1 (Cadastro e Login)
    Description: Atividade Avaliativa
    ~ *   Root CSS - Global styles   * ~

            Version: 1.0

    ****************************************/

  :root{
    /* Colors */
    --color-primary: #BA110C;
    --color-secondary: #fce79a;
    --color-tertiary: #730039;
    --color-quartenary: #CBA135;
    --color-quinternary: #1D1D1F;

    --color-feedback-negative: #E83F5B;
    --color-feedback-warning: #ffcd07;
    --color-feedback-success: #3FE864;
    --color-feedback-info: #155bcb;

    --color-grey-0: #F8F9FA;
    --color-grey-1: #BEBEBE;
    --color-grey-2: #909090;
    --color-grey-3: #212529;
    --color-grey-4: #121214;
    --color-grey-opacity: rgba(33, 37, 41, 0.5);
    
    --color-navigation: #22252A;
    --blur-effect-01: rgba( 31, 38, 135, 0.37 );
    --blur-effect-02: rgba( 2, 2, 2, 0.6 );
    --button-color-green: #69F579;
    --button-color-red: #EB4946;

    --color-shadow-box: rgba(0, 0, 0, 0.05);
    --color-black-mode: #000000;
    --color-white-mode: #FFFFFF;
    --color-transparent: #00000090;
    --color-transparent-01: rgba( 255, 255, 255, 0.18 );

    
    /* Size Elements */
    --button-height-default: 48px;
    --button-height-medium: 40px;
    --button-height-little: 32px;
    --container-width: 1200px;

    /* Font Family */

    --font-primary-nunito: 'Nunito';
    --font-secondary-inter: 'Inter';
    --font-tertiary-roboto: 'Roboto';
    --font-quartenary-andika: 'Andika';

    
    /*  Text Sizes */
    --font-grand-60: 60px;
    --font-grand-58: 58px;
    --font-grand-56: 56px;
    --font-grand-54: 54px;
    --font-grand-52: 52px;
    --font-grand-50: 50px;
    --font-title-48: 48px;
    --font-title-46: 46px;
    --font-title-44: 44px;
    --font-title-42: 42px;
    --font-title-40: 40px;
    --font-subtitle-38: 38px;
    --font-subtitle-36: 36px;
    --font-subtitle-34: 34px;
    --font-subtitle-32: 32px;
    --font-subtitle-30: 30px;
    --font-subtitle-28: 28px;
    --font-subtitle-24: 24px;
    --font-subtitle-20: 20px;
    --font-subtitle-18: 18px;
    --font-text-16: 16px;
    --font-text-14: 14px;
    --font-text-12: 12px;
    --font-text-10: 10px;

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
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
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
