import React, { Component } from 'react';
import Helper from '.././utils/helper';
import { fetchMovies } from '../actions/moviesList';
import { connect } from 'react-redux';
import './../css/header.css';
class Header extends Component {
    
    constructor( props ) {
        super(props);
        this.state = {
            selectedMenu: 'top'
        };
        this.data = {
            title: 'MovieHunt',
            navbar: [
                {
                    id: 'top',
                    displayLabel: 'Top rated',
                    value: 'top',
                    order: 1
                },
                {
                    id: 'movies',
                    displayLabel: 'Movies',
                    value: 'movies',
                    order: 2
                },
                {
                    id: 'discover',
                    displayLabel: 'Discover',
                    value: 'discover',
                    order: 3
                }
            ],
            navbarActions: [
                {
                    id: 'signUp',
                    displayLabel: 'Sign Up',
                    value: 'signUp',
                    order: 1
                },
                {
                    id: 'login',
                    displayLabel: 'Login',
                    value: 'login',
                    order: 2
                },
            ]
        }
        this.fetchMoviesApi = this.fetchMoviesApi.bind( this );
        this.handleSelectMenu = this.handleSelectMenu.bind( this );
        this.fetchMoviesApi();
    }
    
    handleSelectMenu( event ) {
        const _event = event.target.getAttribute( 'data-id' );
        if( this.state.selectedMenu !== _event ){
            this.setState( {
                selectedMenu: _event
            } );    
        }
    }
    
    fetchMoviesApi() {
        this.props.fetchMovies();
    }
    
    render() {
        return (
            <header className="App-header">
                <div className="header__section width-15">
                    <i className="fas fa-bars"></i>
                </div>
                <div className="header__section width-15">
                    <i className="fas fa-heartbeat"></i>
                    <span className="header__section__title"> { this.data.title } </span>
                </div>
                <ul className="navbar width-40" onClick = { this.handleSelectMenu } >
                    {
                        this.data.navbar.map( ( item, index ) => {
                            const _width = parseInt(100/this.data.navbar.length),
                            _activeClassName = Helper.classNames( `navbar__item width-${ _width }`, {
                                'navbar__item--active': item.value === this.state.selectedMenu
                            } );
                            return (
                                <li data-id={ item.value }
                                className={_activeClassName} 
                                key={`element__${index}__${item.value}`}> { item.displayLabel } </li>
                            );  
                    })
                }
                </ul>
                <span className='navbar__devide'></span>
                <ul className="navbar__actions width-25">
                    {
                        this.data.navbarActions.map( ( item, index ) => {
                            const _activeClassName = Helper.classNames( `navbar__item width-30`, {
                                'navbar__item--signUp': item.value === 'signUp',
                                'navbar__item--login': item.value === 'login'
                            } );
                            return (
                                <li data-id={ item.value }
                                className={_activeClassName} 
                                key={`element__${index}__${item.value}`}> { item.displayLabel } </li>
                            );  
                        } )
                    }
                
                </ul>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    fetchMovies: (payload) => {
        dispatch(fetchMovies( payload ));
    } 
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
