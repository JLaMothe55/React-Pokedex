import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import classes from './Auth.module.css';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameOrEmail: "",
            password: "",
            redirect: false,
        };
    }

    onChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = async event => {
        event.preventDefault();
        const res = await axios.post('/api/login', {
            usernameOrEmail: this.state.usernameOrEmail,
            password: this.state.password,
        }).catch(err => console.error(err));

        if (res) {
            this.props.checkSession();
            this.setState({redirect: true});
        }
    }

    render() {

        if (this.state.redirect) {
            return (<Redirect to='/' />);
        }

        return (
			<div className={classes.MainDiv}>
                <h3>Sign In!</h3>
				<form onSubmit={this.onSubmit}>
					
					<div className={classes.MinorDiv}>
                        <div className={classes.LabelDiv}>
                            <label className={classes.Label} for="usernameOrEmail">Username or Email:</label>
						    <input className={classes.Input} type="text" onChange={this.onChange} name="usernameOrEmail" value={this.state.username} />
                        </div>
						
                        <div className={classes.LabelDiv}>
                            <label className={classes.Label} for="password">Password:</label>
						    <input className={classes.Input} type="password" onChange={this.onChange} name="password" value={this.state.password} />
                        </div>
					</div>
					<input type="submit" name="Submit" value="Sign in" />
            	</form>
			</div>
            
        );
    }
}

export default Auth;