
import { types } from '../type';
import axios from "axios";
import { firebase, googleAuthProvider } from '../Initial/firebase';
// eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2NDExN2FjMzk2YmM3MWM4YzU5ZmI1MTlmMDEzZTJiNWJiNmM2ZTEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTG9yZW5h


export const login = (uid, displayName) => ({
type: types.login,
payload : {uid, displayName},
});

export const logout = () => ({
    type : types.logout,
})

//firebase
export const startGoogleIntro = () => {
    return (dispatch) => {
        firebase
        .auth()
        .signInWithPopup(googleAuthProvider)
        .then(({user}) => {
         console.log(user)
         dispatch(login(user.uid, user.displayName))
        })
        .catch ((e) => {
            console.log(e)
        });
    }
}
export const startGoogleLogout = () => {
return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
}
}
//Google Drive
export const setAlbums = (payload) => ({
    type : types.setAlbums,
    payload 
})




//Google Photos
// export function getAlbums () {
//     return async function(dispatch) {
//         var json = await axios.get('https://photoslibrary.googleapis.com/v1/albums', {
//             method: 'GET',
//             headers: { 
//                 'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2NDExN2FjMzk2YmM3MWM4YzU5ZmI1MTlmMDEzZTJiNWJiNmM2ZTEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTG9yZW5h' }   
//         });
//         console.log(json)
//         return dispatch({
//             type: types.setAlbums,
//             payload: json.data

//         })
               
//     } 
// }
