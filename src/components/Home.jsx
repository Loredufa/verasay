import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import img from '../assets/flower.jpg';

export function Home () {

    return (
        <ContGrl>
        <NavBar/>  
        <ContH>
        <ImgH src={require("../assets/01.jpg")} alt="img not found" />
        <ImgH src={require("../assets/07.jpg")} alt="img not found" />
        <ImgH src={require("../assets/08.jpg")} alt="img not found" />
        </ContH>   
        <ContBby>
          <DivText>
            <h3>Sessions Experience</h3>
            <p>90 Minutes <br/> All the Digitals <br/> 9x6 Heirloom Album - 10 Spreads <br/>* This is my standard session used for all stages of your family. Newborns included. *<br/>
               Sessions are built around capturing your family doing something you love. We can garden, play games, ride bikes or bake a favorite family recipe.<br/>
               Spend an evening in the forest or at the beach with the sunset, a blanket and your loves.<br/>
               These sessions are all about connection, and finding something you can all get involved doing. Even the simplest of things, like reading a book to your toddler or giving 
               your baby a sink bath can hold meaning years down the road.<br/>
               Ideal for: everyone</p>
          </DivText>  
          <DivImg>
        <img src={require("../assets/02.jpg")} alt="img not found" />
          </DivImg>  
        </ContBby> 
        <ContBby>
          <DivImgLeft>
        <img src={require("../assets/Short1.jpg")} alt="img not found" />
          </DivImgLeft>  
          <DivText>
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
background-image: url(${img});
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
background-attachment:fixed;
height:150%;
width:100%;
z-index: -100;
`;
const ContH = styled.div`
display: inline;
width:100vw;
background:transparent;
`;
const ImgH = styled.img`
width: 400px;
height: 400px;
margin-top:5%;
box-shadow: 5px 5px 10px rgb(54, 54, 54);
`;
const ContBby = styled.div`
display: flex;
width:100vw;
background:transparent;
width:100%;
margin-top:10%;
`;
const DivText = styled.div`
margin-right:5%;
margin-left:5%;
text-align:left;
& h3 {
font-size: 30px;
text-shadow: 2px 2px 10px #2e2e2d;
}
& p {
    font-size: 20px;
    font-weight: normal;
}
`;
const DivImg = styled.div`
margin-right:5%;
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
