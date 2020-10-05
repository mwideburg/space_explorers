import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Link } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import NavbarLoggedIn from './nav/nav_logged_in_container';

import MainPage from './main/main_page';
import Story from './story/story_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import './app.scss'
const App = () => (
    <div className="main-container">
            <div className="header">
            <div className="nav-logged-in-wrapper">


            <Link to="/" className="title">Space Explorers</Link>
            <Route exact path="/story" component={NavBarContainer}/>
            <Route exact path="/robots" component={NavBarContainer}/>
            <Route exact path="/game" component={NavBarContainer}/>
            </div>
            </div>
                <MainPage />
                {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
           

            
            
        
        <footer>
            Copyright &copy; 2020
        </footer>
        
    </div>
);

export default App;