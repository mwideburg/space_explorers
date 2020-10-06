import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.scss'

class GameNavBar extends React.Component {
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
                <div >
                    <div className="logout-header">
                        {/* <Link to={'/tweets'}>All Tweets</Link>
                        <Link to={'/profile'}>Profile</Link>
                        <Link to={'/new_tweet'}>Write a Tweet</Link> */}
                        <button onClick={this.logoutUser}>Logout</button>
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

export default GameNavBar;