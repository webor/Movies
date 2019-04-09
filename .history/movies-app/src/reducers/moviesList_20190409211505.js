import Constants from 'utils/constants';

const _defaultState = {
    success: null,
    fetching: false,
    moviesList: []
},

const moviesList = (state = _defaultState, action) => {
    const { type = '', payload = {} } = action;
    switch (type) {
     case Constants.MOVIE_LIST.GET_DATA: {
        return {
            moviesList: payload
          }   
     }
      
      
     default:
      return state
    }
   }