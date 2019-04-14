import { combineReducers } from 'redux';
import moviesList from './moviesList';
import account from './account';

export default combineReducers({
    moviesList,
    account
});