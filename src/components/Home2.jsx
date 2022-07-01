import React, { useEffect } from "react";
import { ParallaxProvider} from 'react-scroll-parallax';
import NavBar from "./NavBar";
import { Home } from "./Home";
import ParallaxImg from "./ParallaxImg";
import img1 from '../assets/04.jpg'



export function Home2 () {

    return (
      <ParallaxProvider>
          <NavBar/>
       <ParallaxImg imgsrc={img1} height='500px' opacity='.5'>
       </ParallaxImg>

            <p>90 Minutes <br/> All the Digitals <br/> 9x6 Heirloom Album - 10 Spreads <br/>* This is my standard session used for all stages of your family. Newborns included. *<br/>
               Sessions are built around capturing your family doing something you love. We can garden, play games, ride bikes or bake a favorite family recipe.<br/>
               Spend an evening in the forest or at the beach with the sunset, a blanket and your loves.<br/>
               These sessions are all about connection, and finding something you can all get involved doing. Even the simplest of things, like reading a book to your toddler or giving 
               your baby a sink bath can hold meaning years down the road.<br/>
               Ideal for: everyone</p>
               <ParallaxImg imgsrc={img1} height='500px' opacity='.5' >
       </ParallaxImg>

            <p>90 Minutes <br/> All the Digitals <br/> 9x6 Heirloom Album - 10 Spreads <br/>* This is my standard session used for all stages of your family. Newborns included. *<br/>
               Sessions are built around capturing your family doing something you love. We can garden, play games, ride bikes or bake a favorite family recipe.<br/>
               Spend an evening in the forest or at the beach with the sunset, a blanket and your loves.<br/>
               These sessions are all about connection, and finding something you can all get involved doing. Even the simplest of things, like reading a book to your toddler or giving 
               your baby a sink bath can hold meaning years down the road.<br/>
               Ideal for: everyone</p>
           
       <Home/>
        </ParallaxProvider>    
    )
}

