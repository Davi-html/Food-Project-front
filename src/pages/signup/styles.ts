import styled from "styled-components";

export const Container = styled.div`
    height: 100dvh;

    display: flex;
    justify-content: space-around;
    align-items: center;
    
    color: ${({theme}) => theme.COLORS.Light100};

    .food{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;

        font-family: 'Roboto', sans-serif;
    }

    @media (max-width: 794px){
        flex-direction: column;
        background-color: ${({theme}) => theme.COLORS.Dark400};
    }
`

export const Form = styled.form`
    height: auto;
    width: auto;

    display: flex;
    flex-direction: column;
    gap: 32px;

    padding: 64px;
    border-radius: 16px;
    font-family: 'Poppins', sans-serif;

    background-color: ${({theme}) => theme.COLORS.Dark700};
    color: ${({theme}) => theme.COLORS.Light100};

    .div-input {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    
    .div-input p{
        color: ${({theme}) => theme.COLORS.Light400};
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
    }

    a {
        margin: auto;
        text-decoration: none;

        color: ${({theme}) => theme.COLORS.Light100};
    }

    & h1 {
        text-align: center;
    }

    @media (max-width: 794px){
        background-color: ${({theme}) => theme.COLORS.Dark400};
        padding: 0px;
    }

`
