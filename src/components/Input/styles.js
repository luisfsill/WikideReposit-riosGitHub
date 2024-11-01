import styled from "styled-components";

export const InputContainer = styled.div`
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    height: 62px;
    width: 80%;
    margin: 20px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, border-color 0.3s ease;

    &:focus-within {
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
        border-color: #1E90FF; /* Azul para destaque no foco */
    }

    input {
        background: transparent;
        border: none;
        width: 90%;
        height: 100%;
        padding: 0 20px;
        color: #FFFFFF;
        font-size: 20px;
        outline: none;
        font-family: 'Arial', sans-serif;
        
        &::placeholder {
            color: #B0B0B0; /* Placeholder mais visível */
            opacity: 0.8;
        }
    }
`