import Constants from './../utils/constants';
import apiConfig from '../config/apiConfig';

export const fetchMovies = () => {
    return async ( dispatch, getState ) => {
        dispatch( requestData() );
        const request = new Request( apiConfig.movieList.url );
        var headers = new Headers( apiConfig.movieList.header );
        fetch(request, headers ).then((response) => {
            return response.json();
          })
          .then((response ) => {
              console.log( JSON.stringify( response ) );
              dispatch({
                type: Constants.MOVIE_LIST.GET_DATA,
                payload: response
            });
          });  
    }
};

export const requestData = () => ({
    type: Constants.MOVIE_LIST.FETCHING_LIST
});
    