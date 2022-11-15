import React from "react";
import './Loading.css';
import styled from "styled-components";


export function Loading() {
    
    return (
      <>
      <Load>
      <span class="loader">Veronica Say </span>
      </Load>
      </>
  );
}

const Load = styled.div`
position: center;
margin-top: 20%;
font-family: 'Work Sans';
`;
