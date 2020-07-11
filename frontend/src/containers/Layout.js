import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <div className={classes.Navbar}>
                <Link to="/auth" className={classes.Info}>Sign In</Link>
                <Link to="/" className={classes.Info}>Home</Link>
                <Link to="/register" className={classes.Info}>Register</Link>
                <Link to="/userPage" className={classes.Info}>User Page</Link>
            </div>
        );
    }
}

export default Layout;