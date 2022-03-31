import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export function LandingPage () {

    return (
        <Contenedor>
        <ContImgL >
            <ImgL src={require("../assets/L1.jpg")} alt="img not found" />
        </ContImgL>

        <ContdivL>
        <TitleL>Veronica Say</TitleL>
        <PL>Photography</PL>
        <Link to = '/Home'><BtL>Intro</BtL></Link>
        </ContdivL>
        </Contenedor>
    )
}


const Contenedor = styled.div`
display: flex;
`;
const ContImgL = styled.div`
width:80%
`;
const ImgL = styled.img`
height:100vh;
width:100vw;
`;

const ContdivL = styled.div`
position: absolute;
top:20%;
left:10%;

`;
const TitleL= styled.h1`
font-size:70px;
padding-bottom:0px;
margin-bottom:0px;
font-family:'Shadows Into Light', cursive;
color: #432371;
text-shadow: 5px 5px 10px #2e2e2d;
`;
const PL = styled.p`
font-size:30px;
padding-top:0px;
margin-top:10px;

`;

const BtL = styled.button`
background-color: transparent;
margin-left: 15px;
cursor: pointer;
font-size: 1rem;
padding: 6px 20px;
border: 2px solid #432371;
border-radius: 50px;
box-shadow: 5px 5px 10px rgb(54, 54, 54);
transition: background-color .6s ease;
&:hover {
    color: #9b9b9b;
    background-color:#432371;  
}
`;

