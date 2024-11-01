import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    background-color: #2A2A2A; /* Fundo escuro para contraste */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    }

    h3 {
        font-size: 24px;
        color: #FAFAFA;
        margin-bottom: 10px;
        transition: color 0.2s;
    }

    p {
        font-size: 16px;
        color: #B0B0B0;
        margin-bottom: 20px;
    }

    a {
        font-size: 16px;
        text-decoration: none;
        color: #1E90FF; /* Azul para contraste */
        margin-right: 10px;
        transition: color 0.2s;
    }

    a:hover {
        color: #63B8FF; /* Efeito hover no link */
    }

    a.remover {
        color: #FF4C4C;
        margin-top: 20px;
        cursor: pointer;
        transition: color 0.2s, transform 0.2s;
    }

    a.remover:hover {
        color: #FF0000;
        transform: scale(1.1);
    }

    hr {
        border: none;
        border-top: 1px solid #FAFAFA;
        margin: 20px 0;
    }
`