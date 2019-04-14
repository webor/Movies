import Constants from './../utils/constants';
import Helper from '.././utils/helper';
import apiConfig from '../config/apiConfig';
import axios from 'axios';

export const removeMovies = ( payload = {} ) => {
    return async ( dispatch, getState ) => {
        const sessionId = getState().account.sessionId;
        const request = {
            url: `${apiConfig.removeMovie.url}${sessionId}`,
            method: 'POST',
            data: payload,
            headers: {
                'Content-Type': 'application/json',
                'crossDomain': true,
                'Access-Control-Allow-Origin': '*',
            }
         };
           axios(request).then((response) => {
            console.log( 'ALLOWED Deleted', JSON.stringify( response.data ) );
            if( response.data.status_code === 13 ) {
                const _moviesList = getState().moviesList.moviesList;
                const _index = _moviesList.findIndex( (item) => { return item.id === payload.media_id } );
                _moviesList.splice( _index, 1 );
                dispatch({
                    type: Constants.MOVIE_ACTIONS.DELETE_MOVIE,
                    payload: _moviesList
                });
                Helper.showNotification( `Movie Id ${ payload.media_id } has been deleted successfully`, 'success', 5000 );
                
            }
        }).catch((err) => {
            Helper.showNotification( `Error: ${ err.message }`, 'error', 5000 );
        });
    }
}

export const updateRating = ( payload = {} ) => {
    const { value = {}, movieId = 0 } = payload;
    return async ( dispatch, getState ) => {
        const sessionId = getState().account.sessionId;
        const request = {
            url: `${apiConfig.getRatings.url}${movieId}/rating?api_key=b6b7ec9edfb1ca7bcc122c0c090bf3ef&session_id=${sessionId}`,
            method: 'POST',
            data: { value: payload.value },
            headers: {
                'Content-Type': 'application/json',
                'crossDomain': true,
                'Access-Control-Allow-Origin': '*',
            }
         };
           axios(request).then((response) => {
               
            console.log( 'ALLOWED RATING', JSON.stringify( response.data ) );
            if( response.data.status_message === 'Success' ) {
                Helper.showNotification( `Success ratings have been updated successfully`, 'success', 5000 );
            }
        }).catch((err) => {
            Helper.showNotification( `Error: ${ err.message }`, 'error', 5000 );
        });
    }
}