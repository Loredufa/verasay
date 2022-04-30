import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";


export default function NavBarH () {
   
    return (
    <Sidebarnavigation>
		<div>
			<p>Veronica Say</p>
		</div>
		<div>
			<i class="fa fa-hdd-o"><Link to='/Home'><img class="img" src={require("../assets/casa.png")} alt="img not found" width="30px" height="35px"/></Link></i>
			<span class="tooltip">Home</span>
		</div>
		<div>
			<i class="fa fa-newspaper-o"> <Link to="/Porfolio"> <img class="img" src={require("../assets/camera.png")} alt="img not found" width="30px" height="35px"/> </Link> </i>
			<span class="tooltip">Porfolio</span>
		</div>
        <div>
        <a href="https://www.instagram.com/veronicasay_fotos/"> <ImgH src={require("../assets/instagram.png")} alt="img not found" /> </a>
        </div>  	
</Sidebarnavigation>
    )
}

const Sidebarnavigation = styled.nav`
position: fixed;
top:0px;
left:0px;
display:flex;
height:10%;
width: 100vw;
background-color: whitesmoke;
opacity: 0.9;


	div {
    width: 10vh;
	height:100%;
	font-size:30px;
	white-space: nowrap;
	margin-top: 1%;
	font-family: 'Poppins';
	padding-right:60px;
	cursor: pointer;
	transition: all ease-out 120ms;
	margin-right:250px;
    p {
        margin-top: 1%;
        margin-left:15%;
        font-weight:bold;

    }			
    i {
				display: block;
				font-size: 24px;
               
				transition: all ease 450ms;
			}
			
			.tooltip {
				display: flex;			
				background-color: #313443;
				padding: 8px ;
				border-radius: 3px;			
				opacity: 0;
				visibility: hidden;
				font-size: 13px;
				letter-spacing: .5px;
                color: white;
				
				&:before {
					content: '';
					display: block;
					position: absolute;
					left: -4px;
				
					transform: rotate(45deg);
					width: 10px;
					height: 10px;
					background-color: inherit;
				}
			}
			
			&:hover {
				
				.img {
				filter: invert(11%) sepia(55%) saturate(3501%) hue-rotate(255deg) brightness(96%) contrast(91%); 
			    }
				.tooltip {
					visibility: visible;
					opacity: 1;
				}
			}
			
			&.active {
				background-color: whitesmoke;
				
				i {
					color: #98D7EC;
				}
			}			
		}
`;

const ImgH = styled.img`
width: 25px;
height: 25px;
position: relative;
right:-40%;
margin-right:5%;
justify-content:left;
filter: invert(60%) sepia(0%) saturate(2128%) hue-rotate(88deg) brightness(107%) contrast(76%);
&:hover {
  filter: invert(11%) sepia(55%) saturate(3501%) hue-rotate(255deg) brightness(96%) contrast(91%); 
}
`;