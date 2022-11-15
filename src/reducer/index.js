
const initialState = {
    albums : [],
    googlePhotos : []
}

function rootReducer( state= initialState, action) {
switch (action.type) {

 case 'GET_ALBUMS':
     return {
         ...state,
         albums: action.payload,
     }
 case 'GET_GOOGLE_PHOTOS':
    return {
        ...state,
        googlePhotos: action.payload,
        }
     
 default: return state;

}
}

export default rootReducer