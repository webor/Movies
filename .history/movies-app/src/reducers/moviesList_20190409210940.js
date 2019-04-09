import Constants from 'constants';

const _defaultState = {
    success: null,
    fetching: false,
    moviesList: []
},

const moviesList = (state = _defaultState, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }