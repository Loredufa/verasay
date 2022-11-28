
const initialState = {
    isLoading : false,
    googlePhotos : []
}

function rootReducer( state= initialState, action) {
switch (action.type) {

 case 'LOADER':
     return {
         ...state,
         isLoading: action.payload,
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