import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.scss'

class NavLoggedIn extends React.Component {
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
       
            return (
                <div className="nav-logged-in-wrapper">
                    <div className="logged-in">
                        HELLO WORLD
                        {/* <Link to={'/tweets'}>All Tweets</Link>
                        <Link to={'/profile'}>Profile</Link>
                        <Link to={'/new_tweet'}>Write a Tweet</Link> */}
                        <button className="logged-in" onClick={this.logoutUser}>Logout</button>
                    </div>
                </div>
            );
        
    }

    render() {
        return (
            <div className="">

                { this.getLinks()}
            </div>
        );
    }
}

export default NavLoggedIn;