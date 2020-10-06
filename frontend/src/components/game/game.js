
import React from 'react';
import { withRouter } from 'react-router-dom';
import GameContainer from './game_container'
import MoonMap from '../maps/moon_map'

import "./game.scss"
class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            robot: this.props.robot,
            user: this.props.user

        };

        

    }

    // Once the user has been authenticated, redirect to the Tweets page



    render() {




        return (
            <div className="game-container">
                <div className="sidebar-planets">

                </div>

                <div className="map-container">
                    <h1>{this.props.user.handle}</h1>
                    <MoonMap/>
                        

                </div>  

                <div className="sidebar-inventory">

                </div>
            </div>
        );
    }
}

export default withRouter(Game);