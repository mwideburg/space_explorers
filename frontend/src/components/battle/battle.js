
import React from 'react';
import { withRouter } from 'react-router-dom';

import "./battle.scss"
import enemy1 from "../../images/enemy1.png"
import enemy2 from "../../images/enemy2.png"
import enemy3 from "../../images/enemy3.png"


class Battle extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        
        const randomInt = (max) => {  return Math.floor(Math.random() * Math.floor(max))};
        this.state = {
        
            robot: this.props.robot,
            user: this.props.user,
            enemy: this.props.enemies[randomInt(2)],
            message: "",
            hidden: true

        };

        this.salvage = this.salvage.bind(this)
        this.enemyTurn = this.enemyTurn.bind(this)
        this.attackLaser = this.attackLaser.bind(this)
        this.attackMissle = this.attackMissle.bind(this)

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
        const enemy = this.state.enemy
        let message = "You Missed!"
        const evasion = enemy.evasion
        robot.missles -= 1
        if (robot.weapon2 === 'Mongoose Missile') {
            if ((Math.random() * 100 + evasion) < 50) {
                enemy.hp -= 2
                message = "You hit!"
            }
            
        } else if (robot.weapon2 === 'Honey Badger Missile') {
            //70% chance
            if ((Math.random() * 100 + evasion) < 70){
                enemy.hp -= 3
                message = "You hit!"
            }
            
        } else if (robot.weapon2 === 'Hellhound Missile') {
            if ((Math.random() * 100 + evasion) < 90) {
                enemy.hp -= 3
                message = "You hit!"
            }
           
        }
        this.setState({ enemy: enemy })
        this.props.updateStats(this.state.robot, this.props.user)
        this.setState({ robot: robot, message: message })
        const that = this
        setTimeout(function () {


            that.enemyTurn()
        }, 1000)
        
    }
    attackLaser() {
        let message = "You Missed!"
        const robot = this.state.robot
        const enemy = this.state.enemy
        const evasion = enemy.evasion
        if(robot.weapon1 === 'Laser MKI'){
            if ((Math.random() * 100 + evasion) < 95) {
                enemy.hp -= 1
                message = "You hit!"
            }
            
        } else if (robot.weapon1 === 'Laser MKII'){
            if ((Math.random() * 100 + evasion) < 95) {
                enemy.hp -= 2
                message = "You hit!"
            }
        } else if (robot.weapon1 === 'Laser MKIII'){
            if ((Math.random() * 100 + evasion) < 95) {
                enemy.hp -= 3
                message = "You hit!"
            }
        }
        // debugger
        this.setState({enemy: enemy})
        this.props.updateStats(this.state.robot, this.props.user)
        this.setState({ robot: robot, message: message })
        const that = this
        setTimeout(function () {


            that.enemyTurn()
        }, 1000)
        
    }
    enemyTurn(){
        
        let message = "Enemy is preparing for attack"
        const that = this
        that.setState({ message: message })
        setTimeout(function () {
            
            
            that.enemyAttack()
        }, 2000)

    }
    enemyAttack(){
        let message = "Enemy Missed!"
        const robot = this.state.robot
        const enemy = this.state.enemy
        const evasion = robot.evasion
       
        if (enemy.weapon1 === "Rusty Base Blaster") {
            if ((Math.random() * 100 + evasion) < 95) {
                robot.hp -= 1
                message = "Ouch you got hit!"
            }

        } else if (enemy.weapon1 === ' Base Blaster') {
            if ((Math.random() * 100 + evasion) < 95) {
                robot.hp -= 2
                message = "Ouch you got hit!"
            }
        } else if (enemy.weapon1 === "Nice Base Blaster") {
            if ((Math.random() * 100 + evasion) < 95) {
                robot.hp -= 3
                message = "Ouch you got hit"
            }
        }
        // debugger
        this.setState({ enemy: enemy })
        this.props.updateStats(this.state.robot, this.props.user)
        this.setState({ robot: robot, message: message })
    }
    flee(){
        const robot = this.state.robot
        

        this.props.updateRobot(this.state.robot, this.props.user).then(this.setState({ robot: robot })).then(this.props.history.push('/game'))
    }

    checkHp(){
        
    }
    salvage(){
        // debugger
        const robot = this.state.robot
        const enemy = this.state.enemy
        robot.rosscoin += enemy.rosscoin
        this.setState({ robot: robot })
        
        setTimeout(() => {
            
           
            // robot = this.props.robot
            
        }, 2000);
        this.props.updateRobot(this.state.robot, this.props.user).then(this.setState({ robot: robot })).then(this.props.history.push('/game'))

    }
    endMessage(){
        if (this.state.hidden){
            return null
        }
        const enemy = this.state.enemy
        const salvage = this.salvage
        if (enemy.hp <= 0) {
            const message = `You defeated the evil ross robot, collect your ross coin: $RC ${enemy.rosscoin}`;
            
                return(
                <div>
                    <h1> {message} </h1>
                    <button onClick={() => salvage()}> Salvage Ross Coin </button>
                </div>)
            

        }
    }

    // Once the user has been authenticated, redirect to the Tweets page



    render() {

        if (this.state.hidden) {
            return(
                <div className="render-splash">
                    <img className="render-gif" src="https://tcdonnel.files.wordpress.com/2018/01/transformers.gif?w=200"/>
                    RENDERING..
                </div>
            )
        }
        if(this.state.enemy){

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
               < div className="battle-middle">
               
               
                    <div className="message">
                        <h1>{this.state.message}</h1>
                        {this.endMessage()}
                    </div>
                <div className="battle-view">
                    
                    <img className="battle-img" src="https://pngimg.com/uploads/transformers/transformers_PNG30.png"/>
                    
                    
                        <img className="battle-img" src={enemy1}/>
                </div>
               
               
               </div>

                <div className="enemy-view">
                    
                            <h2>{this.state.enemy.name}</h2>
                    <ul>
                        <li>
                            HP:{this.state.enemy.hp}
                        </li>
                        <li>
                            Evasion:{this.state.enemy.evasion}
                        </li>
                        <li>
                            Weapon:{this.state.enemy.weapon1}
                        </li>


                        <li>
                            Missiles: {this.state.enemy.missiles}
                        </li>

                    </ul>
                    
                </div>
            </div>
        );
    }
}

export default withRouter(Battle);