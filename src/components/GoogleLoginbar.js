import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import styled from 'styled-components';

export function GoogleLoginbar() {
    return (
        <ButtonWrapper>
            <BsGoogle />
            <ButtonText>Login With Google Account</ButtonText>
        </ButtonWrapper>

    )
}



const ButtonWrapper = styled.button`
display:flex;
justify-content:center;
align-items:center;
padding:1rem;
width: 100vw;
border: 1px solid;
background-color:white;
color:black;
position:absolute;
bottom:0;
left:0;
border-radius:2rem 2rem 0 0;
margin:0 auto;
`
const ButtonText = styled.span`
margin:8px;
font-family:'Oxygen';
`