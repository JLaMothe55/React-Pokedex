import React from 'react';
import { Link } from 'react-router-dom';

import classes from './About.module.css';

const About = () => (
       <div>
           <div className={classes.SecondDiv}><img src="https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9"  className={classes.Img}></img></div>
           <div className={classes.ThirdDiv}>
                <div className={classes.FourthDiv}>
                    <div className={classes.FifthDiv}>
                        <h4>Welcome!</h4>
                        <p>To the React Pokedex</p>
                        <p>To test my skills with front end and back end frameworks I created a pokedex listing out all the critters from each game.</p>
                        <p>You can Register as a new user in the upper right of the pokedex and sign-in/ sign-out in the upper left.</p>
                        <p>You can click on a pokemon and see info about it or select pokemon that appeared in certain generations of the games.</p>
                        <p>When signed in the top right of the pokedex will allow you to go to your personal page, when here you can view all the pokemon you've favorited.</p>
                        <p>To favorite a pokemon sign in and click on a pokemon in the pokedex, you will see a button in the top left allowing you to favorite a pokemon.</p>
                        <p>Hope you enjoy the app and finding all your favorites!</p>

                        <Link to="/pokedex">React-Pokedex</Link>
                        <p>Joseph LaMothe</p>
                        <a href="https://www.linkedin.com/in/joseph-lamothe-b72661121/" className={classes.Link}>LinkedIn</a>
                        <a href="https://github.com/JLaMothe55/React-Pokedex" className={classes.Link}>GitHub</a>
                    </div>
                </div>
            </div>
       </div>
        
    
);

export default About;