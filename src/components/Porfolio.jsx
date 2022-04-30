import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firebase } from "../Initial/firebase";
import { login, getAlbums } from "../actions/index";
import styledComponents from "styled-components";
import NavBar from "./NavBar";
import Login from "./Login";
import Logout from "./Logout";


export function Porfolio () {
// const dispatch = useDispatch();
// const allFile = useSelector ((state) => state.albums)

// const [checking, setChecking] = useState(true);
// const [isLoggedIn, setIsLoggedIn] = useState(false);
//  useEffect (() => {
// //consulto a firebase si esta autentificado
// firebase.auth().onAuthStateChanged((user) => {
//     if(user?.uid) {
//         dispatch(login(user.uid, user.displayName));
//         setIsLoggedIn(true);
//     } else {
//         setIsLoggedIn(false)
//     }
//     setChecking(false);
// })
//  }, [dispatch, checking, isLoggedIn]);

//  useEffect(() => {
//     dispatch(getAlbums());
//     }, [dispatch])

// if (checking) {
//     return <h3>Loading...</h3>;

    return (
        <div>
            <NavBar/>
         <h1>Porfolio</h1> 
         {/* {isLoggedIn? <Logout/> : <Login/>} */}
         
          
        </div>      
    )
}