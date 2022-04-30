
import {types} from "../type";

const initialState = {
    uid: null,
    displayName: null,
    albums : []
}

function rootReducer( state= initialState, action) {
switch (action.type) {
 case types.login:
     return {
         uid: action.payload.uid,
         name: action.payload.displayName,
     };

 case types.logout:
    return initialState;

 case types.setAlbums:
     return {
         ...state,
         albums: action.payload,
     }
     
 default: return state;

}
}

export default rootReducer