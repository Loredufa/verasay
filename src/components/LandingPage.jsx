import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Aos from "aos";
import 'aos/dist/aos.css';

export function LandingPage () {
    useEffect (() => {
        Aos.init({duration:2000});
      }, [])
    return (
        <Contenedor>
        <ContImgL data-aos="fade-left">
        </ContImgL>
        <ContdivL data-aos="fade-right"  data-aos-offset="300"  data-aos-easing="ease-in-sine">
        <ImgL src={require("../assets/04.jpg")} alt="img not found"/>
        </ContdivL>
        </Contenedor>
    )
}


const Contenedor = styled.div`
margin-top: 6%;
`;
const ContImgL = styled.div`
font-family:'Poppins';

h1 {
    color: #727A9A;
    
    font-size: 1.5rem;
    
}
`;
const ImgL = styled.img`

width:100vw;

box-shadow: 5px 5px 10px rgb(54, 54, 54);
`;


const ContdivL = styled.div`


`;

const TitleL= styled.h2`
font-size:40px;
padding-bottom:0px;
margin-bottom:0px;
font-family:'Poppins';
color: #432371;
text-shadow: 5px 5px 10px #4d4d21;
`;

const BtL = styled.button`
background-color: transparent;
margin-left: 15px;
cursor: pointer;
font-size: 1rem;
padding: 6px 20px;
border: none;
border-radius: 50px;
color: #868686;
transition: background-color .6s ease;
&:hover {
    color: #432371;
}
`;

