
import React from 'react';
import { withRouter } from 'react-router-dom';
import Robot from './robot'
import "./robot.scss"
class RobotSelection extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: "",

        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    // Once the user has been authenticated, redirect to the Tweets page
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/story');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();
        const robot1 = {
            name: "The Kestrel",
            hp: 30,
            weapon1: "Laser MKI",
            weapon2: "Mongoose Missile",
            missile: 15,
            evasion: 5
        }

        this.props.makeRobot(this.props.user, robot1)
    
    }

    // Render the session errors if there are any



    render() {

        
        

        return (
            <div className="robot-row">
                {/* <div className="robot-form">
                    <form>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('name')}
                            placeholder="Name Your Robot"
                        />



                    
                    </form>


                </div> */}
                <div className="robot-conatiner">
                    
                    <div className="robot" onClick={(robot1) => this.handleSubmit(robot1)}>
                            <div className="robot-img">
                            <img src="https://i.imgur.com/2QuLJvO.jpg" className="robot-img"/>
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
                        <div className="robot" onClick={(robot1) => this.handleSubmit(robot1)}>
                            <div className="robot-img">
                            <img src="https://i.imgur.com/2QuLJvO.jpg" className="robot-img"/>
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
                        <div className="robot">
                        <div className="robot-img" onClick={(robot1) => this.handleSubmit(robot1)}>
                            <img src="https://i.imgur.com/2QuLJvO.jpg" className="robot-img"/>
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
               
            </div>
        );
    }
}

export default withRouter(RobotSelection);