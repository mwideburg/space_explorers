
import React from 'react';
import { withRouter } from 'react-router-dom';

import "./battle.scss"

class Battle extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {
            robot: this.props.robot,
            user: this.props.user,
            hidden: true

        };



    }
    componentDidMount() {
        // debugger
        setTimeout(() => {
            this.setState({ hidden: false });
            let robot = JSON.parse(localStorage.getItem('robot'))
            // robot = this.props.robot
            this.setState({ robot: robot })
        }, 3000);
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
    updateStats() {
        const robot = this.state.robot
        robot.hp -= 5

        this.props.updateRobot(this.state.robot, this.props.user).then(this.setState({ robot: robot }))
    }
    attackMissle() {
        const robot = this.state.robot
        robot.missles -= 1
        
        this.props.updateStats(this.state.robot, this.props.user)
        this.setState({ robot: robot })
    }
    attackLaser() {
        const robot = this.state.robot
        
        
        this.props.updateStats(this.state.robot, this.props.user)
        this.setState({ robot: robot })
    }
    flee(){
        const robot = this.state.robot
        

        this.props.updateRobot(this.state.robot, this.props.user).then(this.setState({ robot: robot })).then(this.props.history.push('/game'))
    }

    checkHp(){
        
    }

    // Once the user has been authenticated, redirect to the Tweets page



    render() {

        
        if (this.state.hidden) {
            return(
                <div className="render-splash">
                    <img src="https://tcdonnel.files.wordpress.com/2018/01/transformers.gif?w=200"/>
                    "RENDERING.."
                </div>
            )
        }
        let robot = this.state.robot
        console.log(this.state.robot)
        // debugger
        return (
            <div className="battle-container">
                <div className="user-robot">
                    
                    <h2>{this.state.robot.name}</h2>
                    
                    <ul>
                        <li>
                            HP:{robot.hp}
                        </li>
                        
                        
                        <li>
                            Missiles: {robot.missles}
                        </li>
                        
                    </ul>
                    
                    <button onClick={() => this.attackLaser()}>Attack {robot.weapon1}</button>
                    <button onClick={() => this.attackMissle()}>Attack {robot.weapon2}</button>
                    <button onClick={() => this.flee()}>Flee</button>
                </div>

                <div className="battle-view">
                    <img className="battle-img" src="https://pngimg.com/uploads/transformers/transformers_PNG30.png"/>
                    


                </div>

                <div className="enemy-view">
                    
                </div>
            </div>
        );
    }
}

export default withRouter(Battle);