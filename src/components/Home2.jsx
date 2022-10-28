import React, { useEffect } from "react";
import { ParallaxProvider} from 'react-scroll-parallax';
import NavBar from "./NavBar";
import { Home } from "./Home";
import ParallaxImg from "./ParallaxImg";
import img1 from '../assets/04.jpg'
import styled from "styled-components";



export function Home2 () {
    return (
      <ParallaxProvider>
          <NavBar/>
       <ParallaxImg imgsrc={img1} height='500px' opacity='.5'>
       </ParallaxImg>
        <First>
            <Greet>hi!</Greet>
            <Welcome>Welcome to my web</Welcome>
            <Present>I´m Verasay <br/> All the Digitals <br/> Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Nunc iaculis est sit amet erat feugiat pulvinar. 
            Duis lorem quam, iaculis non sagittis nec, vulputate a lacus. Nullam posuere elit 
            dictum, efficitur nunc ut, pretium lorem <br/>
            Donec eu erat id libero tristique imperdiet eu quis leo. Vivamus at luctus nunc <br/>
               Ideal for: everyone</Present>
        </First>
       <Home/>
        </ParallaxProvider>    
    )
}

const First = styled.div`
display: flex;
`;

const Greet = styled.h1`
color: #e0dedf;
font-weight: bold;
font-size: 6rem;
margin-left: 5%;
`;

const Welcome = styled.h3`
color:#818181;
font-size: 30px;
text-shadow: 2px 2px 10px #e0dedf;
text-align:left;
margin-left: 5%;
margin-top: 4%;
`;

const Present = styled.p`
font-size: 20px;
font-weight: normal;
color: #313131;
margin-right:5%;
margin-left:5%;
margin-top: 3%;
text-align:left;
`;