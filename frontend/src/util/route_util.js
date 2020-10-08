
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Passed in from parent component or from mapStateToProps
const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                // Redirect to the tweets page if the user is authenticated
                <Redirect to="/story" />
            )
    )} />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            loggedIn ? (
                <Component {...props} />
            ) : (
                    // Redirect to the login page if the user is already authenticated
                    <Redirect to="/" />
                )
        }
    />
);
const Level = ({ component: Component, levelUp, ...rest }) => {
    
    return(
    <Route
        {...rest}
        render={props =>
            (levelUp === 0) ? (
                <Component {...props} />
            ) : (
                    // Redirect to the login page if the user is already authenticated
                    <Redirect to="/game/mars" />
                )
        }
    />
)};

// Use the isAuthenitcated slice of state to determine whether a user is logged in

const mapStateToProps = state => {

    return(
    { loggedIn: state.session.isAuthenticated,
    levelUp: state.entities.robot.qp }
)};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const LevelRoute = withRouter(connect(mapStateToProps)(Level));