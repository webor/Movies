import React, { Component } from 'react';
import logo from './../logo.svg';
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
        const request = new Request('https://api.themoviedb.org/4/list/1?page=1&api_key=b6b7ec9edfb1ca7bcc122c0c090bf3ef');
        var headers = new Headers({
            'Content-Type': 'application/json;charset=utf-8',
        });
        fetch(request, headers ).then((response) => {
            return response.json();
          })
          .then((response ) => {
            this.setState( {
                response: response
            } )
          })
    }
    
    render() {
        return (
            <header className="App-header">
                
            </header>
        );
    }
}

export default Header;