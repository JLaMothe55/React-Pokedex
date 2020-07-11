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
				<form onSubmit={this.onSubmit}>
					
					<div className={classes.MinorDiv}>
						<h4 className={classes.H4} for="usernameOrEmail">Username or Email:</h4>
						<input className={classes.Input} type="text" onChange={this.onChange} name="usernameOrEmail" value={this.state.username} />

						<h4 className={classes.H4} for="password">Password:</h4>
						<input className={classes.Input} type="password" onChange={this.onChange} name="password" value={this.state.password} />

					</div>
                
					
					<input type="submit" name="Submit" value="Sign in" />
            	</form>
			</div>
            
        );
    }
}

export default Auth;