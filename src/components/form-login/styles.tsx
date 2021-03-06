import styled from 'styled-components'

export const Formlogin = styled.form`
    display: flex;
    margin-bottom: 7rem;
    width: 22rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        @media(max-width: 400px){
            width: 80%;
        }
        & + input {
            margin-top: 0.5rem;
        }
    }

    button {
        @media(max-width: 400px){
            width: 80%;
        }
    }

    img {
        width: 12rem;
        height: 12rem;
        margin-bottom: -3rem;
    }

    h3 {
        margin-bottom: 3rem;
        font-size: 1.125rem;
        font-weight: 400;

    &::after {
        content: '';
        position: absolute;
        display: block;
        left: 50;
        height: 0.0625rem;
        width: 13rem;
        background-color: #ff9000;
    }
    }

    h1 {
        margin-bottom: 2rem;
        position: relative;
        font-weight: 500;
    }
`