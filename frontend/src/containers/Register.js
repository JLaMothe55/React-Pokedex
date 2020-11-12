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

                        <div className={classes.LabelDiv}>
                            <label className={classes.Label} for="username">Username:</label>
						    <input className={classes.Input} type="text" onChange={this.onChange} name="username" value={this.state.username} />
                        </div>
						
                        <div className={classes.LabelDiv}>
                            <label className={classes.Label} for="email">Email:</label>
						    <input className={classes.Input} type="text" onChange={this.onChange} name="email" value={this.state.email} />
                        </div>
						
                        <div className={classes.LabelDiv}>
                            <label className={classes.Label} for="firstName">First Name:</label>
						    <input className={classes.Input} type="text" onChange={this.onChange} name="firstName" value={this.state.firstName} />
                        </div>
						
                        <div className={classes.LabelDiv}>
                            <label className={classes.Label} for="lastName">Last Name:</label>
						    <input className={classes.Input} type="text" onChange={this.onChange} name="lastName" value={this.state.lastName} />
                        </div>
						
                        <div className={classes.LabelDiv}>
                            <label className={classes.Label} for="password">Password:</label>
						    <input className={classes.Input} type="password" onChange={this.onChange} name="password" value={this.state.password} />
                        </div>
						
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