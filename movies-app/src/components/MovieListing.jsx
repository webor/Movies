import React, { Component, Fragment } from 'react';
import Preloader from './Preloader';
import Helper from '.././utils/helper';
import Modal from "react-responsive-modal";
import '.././css/list.css';
import { isEmpty } from 'lodash';
import MovieElement from './../components/MovieElement';
import RateMovie from './../components/RateMovie';
import { removeMovies, updateRating } from '../actions/movieActions';
import { connect } from 'react-redux';

class MovieListing extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            activatedElement: '',
            activatedAction: ''
        };
        this.handleMouseEvent = this.handleMouseEvent.bind( this );
        this.handleMovieActions =  this.handleMovieActions.bind( this );
        this.onCloseModal = this.onCloseModal.bind( this );
        this.fetchRatingCallback = this.fetchRatingCallback.bind( this );
    }
    
    handleMouseEvent( event ) {
        const _movieId = parseInt(event.target.getAttribute('data-id'));
        if( _movieId !== this.state.activatedElement ) {
            this.setState( {
                activatedElement: _movieId
            } );
        }
    }
    
    handleMovieActions( event ) {
        const _eventId = event.currentTarget.getAttribute('data-action'),
        { sessionId = '' } = this.props.account;
        if( _eventId !== this.state.activatedAction && !isEmpty( sessionId ) ) {
            this.setState( {
                activatedAction: _eventId
            } );
        } else if( _eventId === 'delete' && !isEmpty( sessionId ) ) {
            this.props.removeMovies( { media_id: this.state.activatedElement } );
        } else {
            Helper.showNotification( `You Have not Signed In First click Sign In then Click login to continue`, 'warning', 5000 );
        }
    }
    
    onCloseModal() {
        this.setState( {
            activatedAction: ''
        } );
    }
    
    fetchRatingCallback( payload ) {
        this.onCloseModal();
        this.props.updateRating({ 
            movieId: this.state.activatedElement,
            value: payload
        });
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
                                <MovieElement { ...{
                                    ...movie, 
                                    ...this.state,
                                    handleMouseEvent: this.handleMouseEvent,
                                    handleMovieActions: this.handleMovieActions
                                } } />
                            );
                        } )
                    }
                    </ul>
                    <Modal
                        open={ this.state.activatedAction === 'rate' }
                        onClose={this.onCloseModal}
                        center
                        classNames={{
                            modal: 'rate__movie'
                    }} >
                        <RateMovie { ...{
                            fetchRatingCallback: this.fetchRatingCallback,
                            moviesList: this.props.moviesData.moviesList,
                            ...this.state
                        } } />
                    </Modal>
                </Fragment>
            }
        </div>
            
        )
    }
}

const mapStateToProps = state => ({
    moviesData: state.moviesList,
    account: state.account
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