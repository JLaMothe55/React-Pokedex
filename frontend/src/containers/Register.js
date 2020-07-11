import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import classes from './Register.module.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            firstName: "",
            lastName: "",
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
        await axios.post('/api/register', {
            username: this.state.username,
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
        }).catch(err => console.error(err));

        this.setState({redirect: true});
    }

    render() {

        if (this.state.redirect) {
            return (<Redirect to='/auth' />);
        }

        return (
			<div className={classes.MainDiv}>
				<h3>Sign Up!</h3>
				<form onSubmit={this.onSubmit}>
					<div className={classes.MinorDiv}>
						 <h4 className={classes.H4} for="username">Username:</h4>
						<input className={classes.Input} type="text" onChange={this.onChange} name="username" value={this.state.username} />

						<h4 className={classes.H4} for="email">Email:</h4>
						<input className={classes.Input} type="text" onChange={this.onChange} name="email" value={this.state.email} />

						<h4 className={classes.H4} for="firstName">First Name:</h4>
						<input className={classes.Input} type="text" onChange={this.onChange} name="firstName" value={this.state.firstName} />

						<h4 className={classes.H4} for="lastName">Last Name:</h4>
						<input className={classes.Input} type="text" onChange={this.onChange} name="lastName" value={this.state.lastName} />

						<h4 className={classes.H4} for="password">Password:</h4>
						<input className={classes.Input} type="password" onChange={this.onChange} name="password" value={this.state.password} />
					</div>
					<div>
						<input type="submit" name="Submit" value="Sign up" />
					</div>
                	
            	</form>
			</div>
           
        );
    }
}

export default Register;