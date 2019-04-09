import React from 'react';
import moment from 'moment';


const movieElement = ( props ) => {
    const _date = moment(props.release_date, 'YYYY_MM_DD').format('LL');
    return (
        <li className="listing__item">
            <img alt={ props.id } src={`https://image.tmdb.org/t/p/w500/${props.backdrop_path}`} />
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