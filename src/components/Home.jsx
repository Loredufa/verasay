import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { LandingPage } from "./LandingPage";
import styled from "styled-components";
import Aos from "aos";
import 'aos/dist/aos.css';


export function Home () {
  useEffect (() => {
    Aos.init({duration:2000});
  }, [])

    return (
        <ContGrl>
        <ContBby>
          <DivText data-aos="fade-right">
            <h3>Sessions Experience</h3>
            <p>90 Minutes <br/> All the Digitals <br/> 9x6 Heirloom Album - 10 Spreads <br/>* This is my standard session used for all stages of your family. Newborns included. *<br/>
               Sessions are built around capturing your family doing something you love. We can garden, play games, ride bikes or bake a favorite family recipe.<br/>
               Spend an evening in the forest or at the beach with the sunset, a blanket and your loves.<br/>
               These sessions are all about connection, and finding something you can all get involved doing. Even the simplest of things, like reading a book to your toddler or giving 
               your baby a sink bath can hold meaning years down the road.<br/>
               Ideal for: everyone</p>
          </DivText>  
          <DivImg data-aos="fade-left">
        <img src={require("../assets/02.jpg")} alt="img not found" />
          </DivImg>  
        </ContBby> 
        <ContBby>
          <DivImgLeft data-aos="fade-right">
        <img src={require("../assets/Short1.jpg")} alt="img not found" />
          </DivImgLeft>  
          <DivText data-aos="fade-left">
            <h3>Short Sessions</h3>
            <p>We focus on what matters most in these chaotic and changing times. <br/>
               We spend time in the outdoor spaces that have meaning to you. 
               That could mean the local park, a walk around your neighborhood, or hanging out on your porch with tea and cookies.<br/>
               Quick, fun and a moment to connect in a fast and crazy year.<br/></p>
          </DivText>     
        </ContBby>
          
        </ContGrl>      
    )
}
const ContGrl = styled.div`
display: inline;
`;
const Pesent = styled.div`

display: block;


`;

const ContBby = styled.div`
display: flex;
width:94vw;
background:transparent;
margin-left: 3%;
margin-top:5%;

`;
const DivText = styled.div`
margin-right:5%;
margin-left:5%;
text-align:left;
& h3 {
color:#818181;
font-size: 30px;
text-shadow: 2px 2px 10px #979797;
}
& p {
    font-size: 20px;
    font-weight: normal;
    color: #313131;
}
`;
const DivImg = styled.div`
box-shadow: 5px 5px 10px rgb(54, 54, 54);
& img {
    height: 100%;
   
}
`;
const DivImgLeft = styled.div`
margin-left:5%;
box-shadow: 5px 5px 10px rgb(54, 54, 54);
& img {
    height: 100%;
 
}
`;
