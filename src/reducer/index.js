
const initialState = {
    albums : []
}

function rootReducer( state= initialState, action) {
switch (action.type) {

 case 'GET_ALBUMS':
     return {
         ...state,
         albums: action.payload,
     }
     
 default: return state;

}
}

export default rootReducer