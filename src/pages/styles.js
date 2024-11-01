import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    margin: 0; /* Removi a margem para melhor centralização */
    padding-top: 20px; /* Adicionei um padding no topo */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: linear-gradient(135deg, #1a1a1d, #4e4e50); /* Gradiente suave */
    color: #FAFAFA;
    font-family: 'Arial', sans-serif;
    
    transition: background 0.3s ease-in-out;

    @media (max-width: 768px) {
        padding: 10px;
    }
`