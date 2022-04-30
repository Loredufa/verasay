import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";


export default function NavBarH () {
   
    return (
    <Sidebarnavigation>
		<div>
			<p>Veronica Say</p>
		</div>
	<ul>
		<li class="active">
			<i class="fa fa-share-alt"></i>
			<span class="tooltip">Connections</span>
		</li>
		<li>
			<i class="fa fa-hdd-o"><Link to='/Home'><img class="img" src={require("../assets/casa.png")} alt="img not found" width="30px" height="35px"/></Link></i>
			<span class="tooltip">Home</span>
		</li>
		<li>
			<i class="fa fa-newspaper-o"> <Link to="/Porfolio"> <img class="img" src={require("../assets/camera.png")} alt="img not found" width="30px" height="35px"/> </Link> </i>
			<span class="tooltip">Porfolio</span>
		</li>
		<li>
			<i class="fa fa-print"></i>
			<span class="tooltip">Fax</span>
		</li>
		<li>
			<i class="fa fa-sliders"></i>
			<span class="tooltip">Settings</span>
		</li>
	</ul>
</Sidebarnavigation>
    )
}



const Sidebarnavigation = styled.nav`
position: fixed;
left:0px;
display: inline-block;
min-height: 100vh;
width: 80px;
background-color: whitesmoke;
	div {
	transform: rotate(90deg);
    width: 10vh;
	height:100%;
	font-size:30px;
	white-space: nowrap;
	margin-top: 70px;
	font-family: 'Poppins';
	padding-right:60px
	
	}
	
	ul {
		text-align: center;
		color: white;
		list-style:none;
		
		li {
			padding: 50px 0px;
			cursor: pointer;
			transition: all ease-out 120ms;
			margin-right:90px;
			i {
				display: block;
				font-size: 24px;
               
				transition: all ease 450ms;
			}
			
			.tooltip {
				display: inline-block;
				position: absolute;
				background-color: #313443;
				padding: 8px 15px;
				border-radius: 3px;
				margin-top: -26px;
				left: 90px;
				opacity: 0;
				visibility: hidden;
				font-size: 13px;
				letter-spacing: .5px;
				
				&:before {
					content: '';
					display: block;
					position: absolute;
					left: -4px;
					top: 10px;
					transform: rotate(45deg);
					width: 10px;
					height: 10px;
					background-color: inherit;
				}
			}
			
			&:hover {
				background-color: #22252E;
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
	}
}

`;




