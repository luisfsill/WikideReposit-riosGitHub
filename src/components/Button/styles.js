import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: #FAFAFA;
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    height: 62px;
    width: 80%;
    margin: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #22272e;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        background-color: #FAFAFA80; /* Opacidade para efeito de transparência */
        cursor: pointer;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Sombra leve */
    }

    &:active {
        background-color: #FAFAFA60;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* Sombra reduzida no clique */
    }
`