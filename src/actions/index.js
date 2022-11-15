import axios from "axios";



export const setAlbums = (payload) => ({
    type : 'GET_ALBUMS',
    payload 
})

export function setGooglePhotos() {
return async function(dispatch) {
    var json = await axios.get('http://localhost:3050/:id')
        return dispatch({
            type:'GET_GOOGLE_PHOTOS',
            payload: json.data
        })
}
}