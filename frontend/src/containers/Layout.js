import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <div className={classes.Navbar}>
                {(!this.props.loggedIn) ? (
                    <Link to="/auth" className={classes.Info}>Sign In</Link>
                ) : (
                    <p className={classes.Info} onClick={() => this.props.logout()}>Signout</p>
                )}
                
                <Link to="/pokedex" className={classes.Info}>Home</Link>
                {(!this.props.loggedIn) ? (
                    <Link to="/register" className={classes.Info}>Register</Link>
                ) : (
                    <Link to="/userPage" className={classes.Info}>User Page</Link>
                )}
            </div>
        );
    }
}

export default Layout;