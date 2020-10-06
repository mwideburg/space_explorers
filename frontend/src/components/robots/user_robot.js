
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import RobotContainer from './robot_container'
import MoonMap from '../maps/moon_map'


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

        debugger
    }
    handleClick() {

        const user = this.props.user
        this.props.getRobot(user).then(this.props.history.push('/user/robot'))
    }
    componentDidMount(){
        debugger
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
        if (this.props.robot === undefined) {
            return (
                <div>
                    RENDERING..
                    <button onClick={() => this.handleClick()}> GET ROBOT</button>
                </div>
            )
            
        }
        let robot = this.state.robot
        
        
        return (
            <div className="game-container">
                
                
                <div className="sidebar-inventory">
                    <Link to="/game">PLAY GAME</Link>
                    <h2>{this.state.robot.name}</h2>
                    <img src={robot.photoUrl} alt="robot" className="robot-img" />
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
        );
    }
}

export default withRouter(RobotUser);