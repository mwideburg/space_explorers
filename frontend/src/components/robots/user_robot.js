
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import RobotContainer from './robot_container'
import MoonMap from '../maps/moon_map'
import snow_owl from "../../images/snow_owl.png";
import the_kestrel from "../../images/the_kestrel.png";
import the_roc from "../../images/the_roc.png";
import soundwave from "../../images/soundwave.gif";
import kestrel_img from "../../images/kestrel_img.jpg";
import roc_img from "../../images/roc_img.png";
import snow_owl_img from "../../images/snow_owl_img.jpg";

import "./user-robot.scss"
class RobotUser extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {
            robot: this.props.robot,
            user: this.props.user,
            hidden: true
        };
        // this.handleClick = this.props.handleClick.bind(this)

        // debugger
    }
    handleClick() {

        const user = this.props.user
        this.props.getRobot(user).then(this.props.history.push('/user/robot'))
    }
    componentDidMount(){
        // debugger
        setTimeout(() => {
            this.setState({ hidden: false });
            let robot = JSON.parse(localStorage.getItem('robot'))
            // robot = this.props.robot
            this.setState({ robot: robot })
        }, 1000);
        // this.setState({robot: this.props.robot})
        
    }
    // componentUnmount(){
    //     debugger
    //     // this.setState({robot: this.props.robot})
    //     localStorage.removeItem('robot')
    //     this.setState({robot: {}})
    //     // robot = this.props.robot

    // }
    reRender() {
        const robot = this.props.robot
        this.setState({ robot: robot })

    }


    // Once the user has been authenticated, redirect to the Tweets page



    render() {
        // debugger
        if (this.state.hidden) {
            return (<div className="render-splash">
                <img className="render-gif" src={soundwave} />
                  RENDERING..
            </div>)
        }
        let robot = this.state.robot

        let main_image;
        if (this.state.robot.name === "The Kestrel") {
            main_image = the_kestrel;
        } else if (this.state.robot.name === "The Snowy Owl") {
            main_image = snow_owl;
        } else if (this.state.robot.name === "The Roc") {
            main_image = the_roc;
        }
        let photo;
        robot.location = "moon"
        if (robot.name === "The Kestrel") {
            photo = kestrel_img
        } else if (robot.name === "The Snowy Owl") {
            photo = snow_owl_img
        } else {
            photo = roc_img
        }
        
        
        return (
            <div className="game-container">
                
                
                <div className="sidebar-inventory">
                    <Link to="/game" className="play-button">PLAY GAME</Link>
                    <h2> {this.state.user.handle}'s</h2>
                    <h3> Most Recent Game: </h3>
                    <center><h3> {this.state.robot.name} </h3></center>
                    <img src={photo} alt="robot" className="robot-img" />
                    <br/>
                    <ul>
                        <li>
                            QP:{robot.hp}
                        </li>
                        <li>
                            $RC:{robot.rosscoin}
                        </li>
                        
                    </ul>
                    
                </div>

                <div className="user-stats">

                    <div className="robot-stats">
                        <div className="robot-title">
                        <h2>{this.state.robot.name}</h2>
                        <Link to="/game" className="robot-main-pic">
                        <img className="robot-main-pic" src={main_image} />
                        </Link>
                        </div>
                    <ul>
                        <li>
                            HP:{robot.hp}
                        </li>
                        <li>
                            Weapon:{robot.weapon1}
                        </li>
                        <li>
                            Weapon 2:{robot.weapon2}
                        </li>
                        <li>
                            Missiles: {robot.missles}
                        </li>
                        <li>
                            Evasion: {robot.evasion}
                        </li>
                    </ul>


                    </div>

                </div>
            </div>
        );
    }
}

export default withRouter(RobotUser);