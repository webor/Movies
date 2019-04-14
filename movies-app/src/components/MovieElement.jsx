import React, { Fragment } from 'react';
import Helper from '.././utils/helper';
import moment from 'moment';


const movieElement = ( props ) => {
    const _date = moment(props.release_date, 'YYYY_MM_DD').format('LL'),
    _imgOverlayToggle = Helper.classNames( 'listing__item__img', {
        'listing__item__img--overlay': props.activatedElement === props.id
    } );
    return (
        <li className="listing__item" >
            <img className = {_imgOverlayToggle} data-id={ props.id } onMouseEnter={ props.handleMouseEvent } alt={ props.id } src={`https://image.tmdb.org/t/p/w500/${props.backdrop_path}`} />
            {
                props.activatedElement === props.id ? 
                <div className='listing__item__actions'>
                    <span data-action='delete' className='listing__item__action listing__item__action--delete' onClick={ props.handleMovieActions } >
                        <i className="listing__item__icon fas fa-trash"></i>
                        <p>Delete</p>
                    </span>
                    <span data-action='rate' className='listing__item__action listing__item__action--rate' onClick={ props.handleMovieActions } >
                        <i className="listing__item__icon fas fa-thumbs-up"></i>
                        <p>Rate</p>
                    </span>
                </div>: ''
            }
            <div className="listing__item__info">
            <div className="listing__item__el width-75">
                <span className="listing__item__info__title"> { props.title }  </span>
                <span className="listing__item__info__date"> { _date } </span>
            </div>
            <div className="listing__item__el width-25">
                <span className="listing__item__info__rating"> { `${props.vote_average * 10}%` } </span>
            </div>
                <span className="listing__item__info__details"> { props.overview } </span>
            </div>
        </li>
    )
};

export default movieElement;