import Constants from './../utils/constants';

const _defaultState = {
    success: null,
    fetching: false,
    createdBy: '',
    name: '',
    description: '',
    closeModal: false,
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
                   createdBy: payload.created_by,
                   description: payload.description,
                   moviesList: payload.items
                 }   
            }
            case Constants.MOVIE_LIST.FETCHING_LIST: {
               return {
                   ...state,
                   fetching: true
               };
           }  
           case Constants.MOVIE_ACTIONS.DELETE_MOVIE: {
               return {
                   ...state,
                   moviesList: payload
               }
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