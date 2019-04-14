import React, { Fragement, useState } from 'react';
import Rating from 'react-rating';
import { isEmpty } from 'lodash';
import './../css/popup.css';

const ratePopup = ( props ) => {
    const _selectedElement = props.moviesList.find( ( movie ) => { return movie.id === props.activatedElement; } ),
    [ rating, setRating ] = useState( _selectedElement.vote_average ),
    setUserRating = (val) => {
        if( val == 0 ) {
            return;
        } else {
            setRating( val );    
        }
    };
    return (
        <div className="ratePopup__wrapper">
            <h4 className='ratePopup__header'> { _selectedElement.title } </h4>
            <div className="listing__item__el width-60">
                <img alt={ props.id } src={`https://image.tmdb.org/t/p/w500/${_selectedElement.backdrop_path}`} />
            </div>
            <div className="ratePopup__description width-30">
                <div className="listing__item__el width-100">
                    <span className="listing__item__info__title"> Overview  </span>
                    <span className="listing__item__info__date"> { _selectedElement.overview } </span>
                </div>
                <div className="listing__item__el width-100">
                    <span className="listing__item__info__title"> Votes  </span>
                    <span className="listing__item__info__date"> { _selectedElement.vote_count } </span>
                </div>
                <div className="listing__item__el width-100">
                    <span className="listing__item__info__title"> Rating  </span>
                    <span className="listing__item__info__date"> { _selectedElement.vote_average } </span>
                </div>
            </div>
            <h4 className='ratePopup__title' style={{ marginBottom: '10px' }} > Set Rating </h4>
            <div className="listing__item__el width-100">
                <Rating start={0}
                    stop = {10}
                    step = {1}
                    fractions = { 2 }
                    onHover = { setUserRating }
                    onClick = { props.fetchRatingCallback }
                    initialRating ={ _selectedElement.vote_average }
                />
                <p className='ratePopup__text width-100'> Your Rating : { rating } </p>
            </div>
        </div>
    );
}

export default ratePopup;