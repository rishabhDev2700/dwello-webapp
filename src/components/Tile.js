import React from 'react'
import styled from 'styled-components';
export function Tile(props) {
  return (
    <TileWrapper>
      <Icon>{props.icon}</Icon>
      <span>{props.text}</span>
    </TileWrapper>
  )
}


const TileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width:5rem;
  height:5rem;
  background-color: #222;
  padding: 2rem;
  margin:14px;
  font-size:1rem;
  color:white;
  border-radius: 1rem;
  border:1px solid white;
  `;

const Icon = styled.span`
  font-size:2rem;
`