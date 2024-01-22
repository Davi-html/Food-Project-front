import styled from "styled-components";

export const Container = styled.button`
    background: ${({theme}) => theme.COLORS.Tomato100};
    color: ${({theme}) => theme.COLORS.Light100};

    border: 0;
    border-radius: 5px;
    padding: 12px 32px;

    cursor: pointer;
`