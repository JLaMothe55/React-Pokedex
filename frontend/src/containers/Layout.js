import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Layout extends Component {
    render() {
        return (
            <div>
                <Link to="/auth">Sign In</Link>
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/userPage">User Page</Link>
            </div>
        );
    }
}

export default Layout;