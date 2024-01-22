import styled from "styled-components";

export const Container = styled.input`
    padding: 12px 14px;

    height: 48px;
    width: 348px;

    border: none;
    border-radius: 8px;

    background: ${({theme}) => theme.COLORS.Dark900};
    color: ${({theme}) => theme.COLORS.Light500};

    &:focus{
        outline: none;
        border: 1px solid #7DFFAF;
    }
    
`