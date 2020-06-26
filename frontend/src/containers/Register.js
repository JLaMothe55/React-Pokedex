import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

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
            <form onSubmit={this.onSubmit}>
                
                <label for="username">Username:</label>
                <input type="text" onChange={this.onChange} name="username" value={this.state.username} />
                
                <label for="email">Email:</label>
                <input type="text" onChange={this.onChange} name="email" value={this.state.email} />
                
                <label for="firstName">First Name:</label>
                <input type="text" onChange={this.onChange} name="firstName" value={this.state.firstName} />
                
                <label for="lastName">Last Name:</label>
                <input type="text" onChange={this.onChange} name="lastName" value={this.state.lastName} />
                
                <label for="password">Password:</label>
                <input type="password" onChange={this.onChange} name="password" value={this.state.password} />
                
                <input type="submit" name="Submit" value="Sign up" />
            </form>
        );
    }
}

export default Register;