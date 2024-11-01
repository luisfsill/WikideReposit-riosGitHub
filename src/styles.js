import  { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    /* Reset básico */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Corpo da página */
    body {
        background-color: #22272e;
        color: #FFFFFF;
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        font-size: 16px;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    /* Ajustes para links */
    a {
        color: inherit; /* Herdar a cor do texto */
        text-decoration: none;
        transition: color 0.2s ease-in-out;
    }

    a:hover {
        color: #1E90FF; /* Cor de destaque ao passar o mouse */
    }

    /* Estilo para botões */
    button {
        cursor: pointer;
        font-family: inherit;
        background-color: #444B54;
        color: #FFFFFF;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        transition: background-color 0.2s ease-in-out;
    }

    button:hover {
        background-color: #555A66;
    }

    /* Ajuste para imagens */
    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    /* Ajustes para listas */
    ul, ol {
        list-style: none;
    }
`