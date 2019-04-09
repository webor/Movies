import React, { Component, Fragment } from 'react';
import Preloader from './Preloader';
import '.././css/list.css';
import MovieElement from './../components/MovieElement';
import { removeMovies, updateRating } from '../actions/movieActions';
import { connect } from 'react-redux';

class MovieListing extends Component {
    constructor( props ) {
        super( props );
    }
    
    render() {
        return(
            <div className='listing__wrapper'>
            {
                 this.props.moviesData.fetching ? <Preloader/>:  
                 <Fragment>
                    <h4 className='listing__header'> { this.props.moviesData.name } </h4>
                    <p className='listing__description'> { this.props.moviesData.description } </p>
                    <ul className='listing__container'>
                    {
                        this.props.moviesData.moviesList.map( ( movie ) => {
                            return(
                                <MovieElement { ...movie } />
                            );
                        } )
                    }
                    </ul>
                </Fragment>
            }
        </div>
            
        )
    }
}

const mapStateToProps = state => ({
    moviesData: state.moviesList
});

const mapDispatchToProps = dispatch => ({
    removeMovies: (payload) => {
        dispatch(removeMovies( payload ));
    },
    updateRating: (payload) => {
        dispatch(updateRating( payload ));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(MovieListing);