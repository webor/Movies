import React, { Component } from 'react';
import apiConfig from '../config/apiConfig';
class Header extends Component {
    
    constructor( props ) {
        super(props);
        this.state = {
            response: {}
        };
        this.data = {
            title: 'Movies Hunt',
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
                    id: 'login',
                    displayLabel: 'Login',
                    value: 'login',
                    order: 1
                },
                {
                    id: 'signUp',
                    displayLabel: 'Sign Up',
                    value: 'signUp',
                    order: 2
                }
            ]
        }
        this.fetchMovies = this.fetchMovies.bind( this );
        this.fetchMovies();
        
    }
    
    fetchMovies() {
        const request = new Request( apiConfig.movieList.url );
        var headers = new Headers( apiConfig.movieList.header );
        fetch(request, headers ).then((response) => {
            return response.json();
          })
          .then((response ) => {
              console.log( JSON.stringify( response ) );
            this.setState( {
                response: response
            });
          });
          
    }
    
    render() {
        return (
            <header className="App-header">
                
            </header>
        );
    }
}

export default Header;