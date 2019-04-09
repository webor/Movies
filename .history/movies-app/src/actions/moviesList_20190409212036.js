import Constants from 'utils/constants';

export const fetchMovies = () => {
    return async ( dispatch, getState ) => {
        dispatch({
            type: Constants.MOVIE_LIST.GET_DATA,
            payload: 'result_of_simple_action'
        });    
    }
} 
    