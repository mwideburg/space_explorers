
import React from 'react';
import { withRouter, Route, Switch,  } from 'react-router-dom';
import { LevelRoute  } from '../../util/route_util';
import GameContainer from './game_container'
import MoonMap from '../maps/moon_map_conatiner'
import MarsMap from '../maps/mars_map_conatiner'
import RobotStats from './robot_stats'
import GameStore from '../game_store/game_store_container';
import soundwave from "../../images/soundwave.gif";


import moon_img from '../../images/mars.png'
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
            robot.location = "moon"
        
        return (
            <div className="game-container">
                
                <div className="sidebar-planets">
                    <div className="planet-description">
                    Current Location: {robot.location}
                    
                    <div className="planet-container">
                        <img src={moon_img} alt="moon"/>
                    </div>
                    <p>What a moon it is...</p>
                    </div>
                </div>

                <div className="map-container">
                    <h1>{this.props.user.handle}</h1>
                    <Switch>
                        <Route exact path="/game" component={() => <MoonMap robot={robot} />} ></Route>
                        <Route exact path="/game/mars" component={() => <MarsMap robot={robot} />} ></Route>

                    </Switch>
                    
                    
              
                        

                </div>  

                <div className="sidebar-inventory">
                    <h2>$RC: {robot.rosscoin}</h2>
                   <h2>{this.state.robot.name}</h2>
                   <center>QP: {robot.qp} </center>
                    <img src={robot.photoUrl} alt="robot" className="robot-img" />
                <ul>
                    <li>
                        HP:{robot.hp}
                    </li>
                    <li>
                        Location:{robot.location}
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
        );
    }
}

export default withRouter(Game);