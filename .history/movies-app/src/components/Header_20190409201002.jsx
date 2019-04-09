import React, { Component } from 'react';
import logo from './../logo.svg';
class Header extends Component {
    
    constructor( props ) {
        super(props);
        this.state = {};
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
    }
    
    render() {
        return (
            <header className="App-header">
                
            </header>
        );
    }
}

export default Header;