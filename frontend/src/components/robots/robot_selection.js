
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
        debugger
        e.preventDefault();
        const robot1 = {
            name: "The Kestrel",
            hp: 30,
            weapon1: "Laser MKI",
            weapon2: "Mongoose Missile",
            missile: 15,
            evasion: 5
        }
        const robot2 = {
            name: "The Snowy Owl",
            hp: 30,
            weapon1: "Laser MKI",
            missile: 5,
            evasion: 20
        }
        const robot3 = {
            name: "The Roc",
            hp: 40,
            weapon1: "Laser MKI",
            missile: 5,
            evasion: 5
        }

        if (e.currentTarget.id === 'kestrel'){
            this.props.makeRobot(this.props.user, robot1)
        } else if(e.currentTarget.id === 'snow-owl') {
            this.props.makeRobot(this.props.user, robot2)
        } else if (e.currentTarget.id === 'roc') {
            this.props.makeRobot(this.props.user, robot3)
        }

        
    
       
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
                    
                    <div id="kestrel" className="robot" onClick={(robot1) => this.handleSubmit(robot1)}>
                        <div className="robot-img">
                            <img src="https://i.imgur.com/2QuLJvO.jpg" className="robot-img"/>
                            </div>
                            <div className="robot-stats">
                                    <ul>
                                        <li>
                                            "The Kestrel"
                                        </li>
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
                        <div id="snow-owl" className="robot" onClick={(robot2) => this.handleSubmit(robot2)}>
                            <div  className="robot-img">
                            <img src="https://lh3.googleusercontent.com/proxy/W4rwED5zwctCtxUV77ToPByKQNQI6RnlPz92rtcGJQvJJZioWzHSvSG88o35KQEnup_LvwDK7RotPwlzajtfQIABKrdBQaD2G5DWox9ETUaqdcH-" className="robot-img"/>
                            </div>
                            <div className="robot-stats">
                                    <ul>
                                        <li>
                                            "The Snowy Owl"
                                        </li>
                                        <li>
                                                hp: 30
                                        </li>
                                        <li>
                                                weapon 1: "Laser MKI"
                                        </li>
                                        <li>
                                            missile: 15
                                        </li>
                                        <li>
                                                evasion: 20
                                        </li>
                                    </ul>
                            </div>

                        
                        </div> 
                        <div id="roc" className="robot">
                        <div className="robot-img" onClick={(robot3) => this.handleSubmit(robot3)}>
                            <img src="https://i.pinimg.com/originals/93/f3/b7/93f3b751097e506880f4ba37403c143b.png" className="robot-img"/>
                            </div>
                            <div className="robot-stats">
                                    <ul>
                                        <li>
                                            "The Roc"
                                        </li>
                                        <li>
                                                hp: 40
                                        </li>
                                        <li>
                                                weapon 1: "Laser MKI"
                                        </li>
                                     
                                        <li>
                                            missile: 5
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