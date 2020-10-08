
import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import GameContainer from './game_container'
import MoonMap from '../maps/moon_map'
import RobotStats from './robot_stats'
import GameStore from '../game_store/game_store_container';
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
            let robot = JSON.parse(localStorage.getItem('robot'))
            
            // robot = this.props.robot
            this.setState({ robot: robot })
            
            this.props.getEnemies(robot)
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
                return "RENDERING.."
            }
            let robot = this.state.robot
            console.log(this.state.robot)
        // debugger
        return (
            <div className="game-container">
                <div className="sidebar-planets">
                
                </div>

                <div className="map-container">
                    <h1>{this.props.user.handle}</h1>
                    <MoonMap/>
              
                        

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