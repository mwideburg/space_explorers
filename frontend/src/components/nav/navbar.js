import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.scss'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="navbar-loggedin">
                    
                    <div className="logout-header">
                        {/* <Link to={'/tweets'}>All Tweets</Link>
                        <Link to={'/profile'}>Profile</Link>
                        <Link to={'/new_tweet'}>Write a Tweet</Link> */}
                        <button onClick={this.logoutUser} className="logout-button">Logout</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="navWrapper">
                    <link rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Press+Start+2P"/>
                    
                    <div className="NavBar ">
                        <img className="entry-gif" src="https://cdn2.scratch.mit.edu/get_image/user/10551558_60x60.png" />
                        <Link to={'/signup'}>
                             Signup
                        </Link>
                        <Link to={'/login'} >
                            Login 
                        </Link>

                    </div>

                </div>
                
            );
        }
    }

    render() {
        return (
            <div className="">
                
                { this.getLinks()}
            </div>
        );
    }
}

export default NavBar;