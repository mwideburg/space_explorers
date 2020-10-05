
import React from 'react';
import { withRouter } from 'react-router-dom';
import "./robot.scss"
class Robot extends React.Component {


    render() {

        return (

                <div className="robot-conatiner">
                    <div className="robot">
                        <div className="robot-img">
                            <img src="https://i.imgur.com/2QuLJvO.jpg" className="robot-img" />
                        </div>
                        <div className="robot-stats">
                            <ul>
                                <li>
                                    hp: 30
                                        </li>
                                <li>
                                    weapon 1: "Laser MKI"
                                        </li>
                                <li>
                                    weapon 2: "Mongoose Missile"
                                        </li>
                                <li>
                                    missile: 15
                                        </li>
                                <li>
                                    evasion: 5
                                        </li>
                            </ul>
                        </div>


                    </div>



                </div>

        );
    }
}

export default withRouter(Robot);