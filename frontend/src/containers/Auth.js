import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

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
            <form onSubmit={this.onSubmit}>
                
                <label for="usernameOrEmail">Username or Email:</label>
                <input type="text" onChange={this.onChange} name="usernameOrEmail" value={this.state.username} />
                
                <label for="password">Password:</label>
                <input type="password" onChange={this.onChange} name="password" value={this.state.password} />

                <input type="submit" name="Submit" value="Sign in" />
            </form>
        );
    }
}

export default Auth;