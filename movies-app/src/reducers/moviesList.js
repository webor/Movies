import Constants from './../utils/constants';

const _defaultState = {
    success: null,
    fetching: false,
    name: '',
    description: '',
    moviesList: []
};

const moviesListing = (state = _defaultState, action) => {
    const { type = '', payload = {} } = action;
    try {
        switch (type) {
            case Constants.MOVIE_LIST.GET_DATA: {
               return {
                   ...state,
                   fetching: false,
                   name: payload.name,
                   description: payload.description,
                   moviesList: payload.results
                 }   
            }
            case Constants.MOVIE_LIST.FETCHING_LIST: {
               return {
                   ...state,
                   fetching: true
               };
           }  
            default:
             return state
           }   
    } catch( err ) {
        console.log( err );
        return _defaultState;       
    }
};

export default moviesListing;