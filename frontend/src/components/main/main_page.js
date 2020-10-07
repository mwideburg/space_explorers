import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Switch, Route, Link } from 'react-router-dom';
import NavBarContainer from '../nav/navbar_container';
import NavLoggedIn from '../nav/nav_logged_in';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import Story from '../story/story_container';
import Robots from '../robots/robot_selection_container';
import Game from '../game/game_container';
import UserRobot from '../robots/robot_container';
import Battle from '../battle/battle_container';

import './main.scss'
class MainPage extends React.Component {

    render() {
        return (
            <div className="splash-container">
                <link rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Press+Start+2P"/>
                
                <div className="wrapper">
                <ProtectedRoute exact path="/robots" component={Robots}/>
                <ProtectedRoute exact path="/game/battle" component={Battle}/>
                <ProtectedRoute exact path="/game" component={Game}/>
                <ProtectedRoute exact path="/user/robot" component={UserRobot}/>
                <Switch>
                    <AuthRoute exact path="/" component={NavBarContainer}/>
                    
                    <AuthRoute exact path="/login" component={LoginFormContainer} />
                    <AuthRoute exact path="/signup" component={SignupFormContainer} />
                    
                </Switch>
                    <ProtectedRoute exact path="/story" component={Story} />

                </div>
                
                
            </div>
        );
    }
}

export default MainPage;