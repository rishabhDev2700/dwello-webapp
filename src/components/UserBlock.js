import styled from 'styled-components';
import React from 'react'
export function UserBlock() {
    return (
        <BlockWrapper>
            <BlockUserAvatar src="https://static.businessinsider.com/image/5899ffcf6e09a897008b5c04-400/image.jpg" />
            <UserDetails>
                <UserName>Rishabh</UserName>
                <UserCourse>B.Tech CSE, 3rd Year</UserCourse>
            </UserDetails>
        </BlockWrapper>
    )
}


const BlockWrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding:1rem;
margin:1rem;
max-width: 30rem
`;

const BlockUserAvatar = styled.img`
width:5rem;
border-radius: 20rem;
`;
const UserDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const UserName = styled.div`
font-size: 1.5rem;
margin:5px;
`;
const UserCourse = styled.div`
font-size:14px;
color:#999P;
margin:5px;
font-weight: semi-bold;
`;