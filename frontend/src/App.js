import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import axios from 'axios';
import cookie from 'react-cookies';

import Auth from './containers/Auth';
import Aux from './utils/Aux';
import FeaturedPokedex from './containers/FeaturedPokedex';
import Layout from './containers/Layout';
import Register from './containers/Register';
import UserPage from './containers/UserPage';
import About from './components/About';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      sessionInfo: {
        username: null,
        firstName: null,
        lastName: null,
        loggedIn: false,
      },
    };
  }

  componentDidMount() {
    this.checkSession();
  }

  checkSession = async () => {
      const res = await axios.get('/api/sessioninfo')
        .catch(err => console.log(err));

      if (!res) return;

      this.setState({
        username: res.data.username,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        loggedIn: true,
      });
  }

  logout = async () => {

    cookie.remove('PokeSesh')

    this.setState({
      username: null,
      firstName: null,
      lastName: null,
      loggedIn: false,
    })
}



  render() {
    return (
      <Aux>
        <Router>
          <Route exact path="/">
            <About styles={{ backgroundImage:`url(https://external-preview.redd.it/67dDnuxdsB8zPNcQcmWERHC7iNHgxBr3r7-V2xM_-M0.jpg?auto=webp&s=69db98a7c9c5aecdd0faa43f176b464956ef0ec5)` }}/>
          </Route>
          <div style={{marginTop: "80px"}}>
            <Switch>
              <Route path="/pokedex">
                <FeaturedPokedex loggedIn={this.state.loggedIn}/>
                <Layout loggedIn={this.state.loggedIn} logout={this.logout}/>
              </Route>
              <Route path="/auth">
                <Auth checkSession={this.checkSession} />
                <Layout loggedIn={this.state.loggedIn} logout={this.logout}/>
              </Route>
              <Route path="/register">
                <Register />
                <Layout loggedIn={this.state.loggedIn} logout={this.logout}/>
              </Route>
              <Route path="/userPage">
                <UserPage loggedIn={this.state.loggedIn} />
                <Layout loggedIn={this.state.loggedIn} logout={this.logout}/>
              </Route>
            </Switch>
            </div>
        </Router>
      </Aux>
    );
  }
}

export default App;
