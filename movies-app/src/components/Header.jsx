import React, { Component } from 'react';
import Helper from '.././utils/helper';
import { isEmpty } from 'lodash';
import { fetchUserRequestToken, fetchUserSessionId } from '../actions/accountActions';
import { fetchMovies } from '../actions/moviesList';
import { connect } from 'react-redux';
import './../css/header.css';
class Header extends Component {
    
    constructor( props ) {
        super(props);
        this.state = {
            selectedMenu: 'top',
            isLoginSuccess: false,
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
                {
                    id: 'loggedIn',
                    displayLabel: '',
                    value: 'loggedIn',
                    order: 3
                }
            ]
        }
        this.fetchMoviesApi = this.fetchMoviesApi.bind( this );
        this.handleSelectMenu = this.handleSelectMenu.bind( this );
        this.handleAccountActions = this.handleAccountActions.bind( this );
        this.validateAccountSignUp();
        this.fetchMoviesApi();
    }
    
    validateAccountSignUp() {
        const _urlParams = Helper.extractKeysFromUrl( window.location.search );
        if( _urlParams.request_token && JSON.parse(_urlParams.approved) ) {
            this.props.fetchUserRequestToken( { requestToken: _urlParams.request_token } );
        } else {
            this.props.fetchUserRequestToken();
        }
    }
    
    componentDidUpdate() {
        if( !isEmpty( this.props.account.sessionId ) && !this.state.isLoginSuccess ) {
            Helper.showNotification( `User ${ this.props.moviesList.createdBy } Signed In successfully`, 'success', 5000 );
            this.setState({
                isLoginSuccess: true
            });
        }
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
    
    handleAccountActions( event ) {
        const _eventId = event.target.getAttribute( 'data-id' ),
         { requestToken = '' } = this.props.account,
         _urlParams = Helper.extractKeysFromUrl( window.location.search );
        if( 'signUp' === _eventId && !isEmpty(requestToken) ) {
            window.location.replace(`https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000`);
        } else if( 'login' === _eventId && requestToken === _urlParams.request_token ) {
            this.props.fetchUserSessionId( { request_token: requestToken } );
        }
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
                <ul className="navbar__actions width-25" onClick = { this.handleAccountActions } >
                    {
                        this.data.navbarActions.map( ( item, index ) => {
                            const _activeClassName = Helper.classNames( `navbar__item width-30`, {
                                'navbar__item--signUp': item.value === 'signUp',
                                'navbar__item--login': item.value === 'login',
                                'navbar__item--loggedIn': item.value === 'loggedIn',
                                'navbar__item--hidden': item.value === 'login',
                                'navbar__item--hidden': item.value === 'signUp' && !isEmpty( Helper.extractKeysFromUrl( window.location.search ).request_token ),
                            } );
                            if( item.value !== 'loggedIn' && !this.state.isLoginSuccess ) {
                                return (
                                    <li data-id={ item.value }
                                    className={_activeClassName} 
                                    key={`element__${index}__${item.value}`}> { item.displayLabel } </li>
                                );      
                            } else if( item.value === 'loggedIn' && !isEmpty( this.props.account.requestToken ) && !isEmpty( this.props.account.sessionId ) ) {
                                return (
                                    <li data-id={ item.value }
                                    className={_activeClassName} 
                                    key={`element__${index}__${item.value}`}> 
                                    <i className="fas fa-user"></i>
                                    { this.props.moviesList.createdBy } </li>
                                );      
                            }
                            
                        } )
                    }
                
                </ul>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    account: state.account,
    moviesList: state.moviesList
});

const mapDispatchToProps = dispatch => ({
    fetchMovies: (payload) => {
        dispatch(fetchMovies( payload ));
    },
    fetchUserRequestToken: ( payload ) => {
        dispatch(fetchUserRequestToken( payload ));
    },
    fetchUserSessionId: ( payload ) => {
        dispatch(fetchUserSessionId( payload ));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
