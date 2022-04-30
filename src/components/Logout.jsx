import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import {startGoogleLogout} from '../actions/index';

export default function Login () {
const dispatch = useDispatch(); 

    function handleLogoutGoogle () {
    dispatch(startGoogleLogout())
    };
    
    return (
         <div>
         <button onClick={handleLogoutGoogle}>Cerrar Sesion</button> 
         </div>
    )
}