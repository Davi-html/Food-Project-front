import styled from "styled-components";

export const Container = styled.div`
    color: black;
    background: white;

    width: 100%;
    height: 100dvh;

    display: flex;
    justify-content: space-around;
    align-items: center;



    img {
        height: 400px;
    }
    
    .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    
        h1 {
            color: #FCA398;
            margin-bottom: 10px;
        }
        
        p {
            font-weight: bold;
        }
        font-family: roboto;
    }
`