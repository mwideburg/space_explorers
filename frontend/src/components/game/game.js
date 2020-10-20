
import React from 'react';
import { withRouter, Route, Switch,  } from 'react-router-dom';
import { LevelRoute  } from '../../util/route_util';
import GameContainer from './game_container'
import MoonMap from '../maps/moon_map_conatiner';
import MarsMap from '../maps/mars_map_conatiner';
import RobotStats from './robot_stats'
import GameStore from '../game_store/game_store_container';
import soundwave from "../../images/soundwave.gif";
import repair_shop from "../../images/rich_image.png";
import travel_img from "../../images/rocket.png";
import battle from "../../images/enemy5.png";
import kestrel_img from "../../images/kestrel_img.jpg";
import roc_img from "../../images/roc_img.png";
import snow_owl_img from "../../images/snow_owl_img.jpg";


import moon_img from '../../images/moon2.png';
import "./game.scss"
class Game extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {
            robot: this.props.robot,
            user: this.props.user,
            hidden: true

        };

        

    }
    componentDidMount(){
        
        
        setTimeout(() => {
            this.setState({ hidden: false });
            
            this.props.getRobot(this.props.user)
            let robot = JSON.parse(localStorage.getItem('robot'))
            this.setState({ robot: robot })
            this.props.getEnemies(robot)
            
            // l
            // let robot = this.props.robot
            // robot = this.props.robot
            // this.setState({ robot: robot })
            // this.props.getEnemies(robot)
            
        }, 1000);

        // this.setState({robot: this.props.robot})
        
    }

    componentDidUpdate(){
        
    }
    componentWillUnmount() {
        const robot = this.state.robot
        this.props.updateRobot(this.state.robot, this.props.user).then(this.setState({ robot: robot }))

    }
    
    reRender(){
        const robot = this.props.robot
        this.setState({robot: robot})
        
    }
    updateStats(){
        const robot = this.state.robot
        robot.hp += 10
        robot.rosscoin -= 100
        
        this.props.updateRobot(this.state.robot, this.props.user).then(this.setState({ robot: robot }))
    }
    buyMissle(){
        const robot = this.state.robot
        robot.missles += 5
        robot.rosscoin -= 100
        this.props.updateRobot(this.state.robot, this.props.user).then(this.setState({ robot: robot }))
    }
    
    

    // Once the user has been authenticated, redirect to the Tweets page



    render() {
            if(this.state.hidden) {
                return (<div className="render-splash">
                  <img className="render-gif" src={soundwave} />
                  RENDERING..
                </div>)
            }
            let robot = this.props.robot
            let photo;
            robot.location = "moon"
            if(robot.name === "The Kestrel"){
                photo = kestrel_img
            }else if(robot.name === "The Snowy Owl"){
                photo = snow_owl_img
            } else{
              photo = roc_img
            }
        
        return (
          
          <div className="game-container">
            
            <div className="sidebar-planets">
            <div className="side-legend">
              REPAIR SHOP: <img src={repair_shop} alt="repair shop" />
              <br/>
              TRAVEL: <img src={travel_img} alt="repair shop" />
                <br />
              BATTLE: <img src={battle} alt="repair shop" />
            </div>
              <div className="planet-description">
                Current Location:
                <br></br>
                {robot.location}
                <div className="planet-container">
                  <img src={moon_img} alt="moon" />
                </div>
                <p>What a moon it is...</p>
              </div>
            </div>

            <div className="map-container">
              <h1>{this.props.user.handle}</h1>
              <MarsMap robot={robot} />

              
              <div className="toolbar" >
                <center><h2>Goals</h2></center>
                <p> * Click Robots to fight them </p>
                <p> * Defeat Robots to gain quest points</p>
                <p> * Click the Spaceship to launch when you have earned enough quest points</p>
              </div>
            </div>

            <div className="sidebar-inventory">
              <h2>$RC: {robot.rosscoin}</h2>
              <h2>{this.state.robot.name}</h2>
              <center>QP: {robot.qp} </center>

              <img src={photo} alt="robot" className="robot-img" />
              <ul>
                <li>HP:{robot.hp}</li>
                <li>Location:{robot.location}</li>
                <li>Weapon:{robot.weapon1}</li>
                <li>Weapon 2:{robot.weapon2}</li>
                <li>Missiles: {robot.missles}</li>
                <li>Evasion: {robot.evasion}</li>
              </ul>
            </div>
          </div>
        );
    }
}

export default withRouter(Game);