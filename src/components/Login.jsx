import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import {startGoogleIntro} from '../actions/index';

export default function Login () {
const dispatch = useDispatch(); 

    function handleGoogle () {
    dispatch(startGoogleIntro())
    };
    
    return (
         <div>
         <button onClick={handleGoogle}>Iniciar sesion con Google</button> 
         </div>
    )
}