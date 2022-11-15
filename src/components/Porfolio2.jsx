import React from "react";
import NavBar from "./NavBar";
import { Gallery } from "./Gallery";
import styled from "styled-components";


export function Porfolio2() {
    
    return (
      <>
      <NavBar/>
      
      <Seccion>
      <Gallery/>
      </Seccion>
      </>
  );
}

const Seccion = styled.div`
margin-top : 5%;
`;


  