import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import axios from 'axios';

import Auth from './containers/Auth';
import Aux from './utils/Aux';
import FeaturedPokedex from './containers/FeaturedPokedex';
import Layout from './containers/Layout';
import Register from './containers/Register';
import UserPage from './containers/UserPage';

import './App.css';

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
      // Joseph should put this in a service
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

  render() {
    return (
      <Aux>
        <Router>
          <Layout />
          <div>
            <Switch>
              <Route exact path="/">
                <FeaturedPokedex />
              </Route>
              <Route path="/auth">
                <Auth checkSession={this.checkSession} />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/userPage">
                <UserPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </Aux>
    );
  }
}

export default App;
