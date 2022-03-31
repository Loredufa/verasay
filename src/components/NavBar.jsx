import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";


export default function NavBar () {
   
    return (
       <ContNb>            
        <Link to="/Porfolio"> <ButtonNbP>  
            Porfolio
        </ButtonNbP> </Link> 
        <Link to='/Home'> <ButtonNbH> 
           Home
        </ButtonNbH> </Link>
    
        </ContNb> 
        
    )
}

const ContNb = styled.div`
justify-content: right;

`;
const ButtonNbH = styled.button`
position:fixed;
right:18%;
border: none;
background-color:transparent;
padding:20px;
font-size:20px;
text-decoration: none;
cursor: pointer;
&:hover {
    transition: color .6s ease;
    color:#432371;  
}

`;
const ButtonNbP = styled.button`
position:fixed;
right:8%;
border: none;
background-color:transparent;
padding:20px;
font-size:20px;
text-decoration: none;
cursor: pointer;
&:hover {
    transition: color .6s ease;
    color:#432371;  
}
`;

