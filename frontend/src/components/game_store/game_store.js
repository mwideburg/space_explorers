import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import rich from '../../images/rich.png'



class GameStore extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {

            robot: this.props.robot,
            user: this.props.user,
            message: "",
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

    checkMoney(cost){
        if(this.state.robot.rosscoin > cost){
            return true
        }
        this.setState({message: "Not Enough Ross Coin, maybe you haven't been finishing strong"})
        setTimeout(() => {
            
            this.setState({ message: "" })
        }, 3000);
        return false
    }
    increaseHp(){
        const robot = this.state.robot
        if(!this.checkMoney(100)){
            return null
        }
        if(robot.hp < robot.hpmax ){
            if (robot.hp + 10 > robot.hpmax){
                robot.hp = robot.hpmax 
            }
            if (robot.hp + 10 < robot.hpmax){

                robot.hp += 10
            }
        }
        robot.rosscoin -= 100
        this.setState({robot: robot})
    }
    increaseEvasion(){
        const robot = this.state.robot
        if (!this.checkMoney(400)) {
            return null
        }
        robot.evasion += 2
        robot.rosscoin -= 400
        this.setState({ robot: robot })
    }

    upgradeWeapon1(weapon){
        if (!this.checkMoney(400)) {
            return null
        }
        const robot = this.state.robot
        robot.weapon1 = weapon
        robot.rosscoin -= 400
        this.setState({ robot: robot })
    }
    upgradeWeapon2(weapon){
        if (!this.checkMoney(600)) {
            return null
        }
        const robot = this.state.robot
        robot.weapon2 = weapon
        robot.rosscoin -= 600
        this.setState({ robot: robot })
    }
    

    chooseGreeting(){
        const randomInt = (max) => { return Math.floor(Math.random() * Math.floor(max)) };
        const greeting = ["Hey, hope you had a good break, go grab some coffee, and we'll get started in a moment", 
        "Remember to always finish strong",
        "SnakeCase is what you should be using, I hate when people don't use snakeCase"]
        var array = greeting[randomInt(3)]
        return array
    }

    checkGun(){
        
    }

    buyMissile() {
        if (!this.checkMoney(100)) {
            return null
        }
        const robot = this.state.robot
        robot.missles += 3
        robot.rosscoin -= 100
       this.setState({ robot: robot })
    }

    render(){
        if (this.state.hidden) {
            return (
                <div className="render-splash">
                    <img src="https://tcdonnel.files.wordpress.com/2018/01/transformers.gif?w=200" />
                    RENDERING..
                </div>
            )
        }
        const robot = this.state.robot
        let weapon
        if (robot.weapon1 === "Laser MKI"){
            weapon = "Laser MKII"

        } else if ((robot.weapon1 === "Laser MKII")){
            weapon = "Laser MKIII"
        }else{
            weapon = "No Upgrade Available"
        }

        let weapon2
        if (robot.weapon2 === "Mongoose Missile"){
            weapon2 = "Honey Badger Missile"

        } else if ((robot.weapon2 === "Honey Badger Missile")){
            weapon2 = "Hellhound Missile"
        }else{
            weapon2 = "No Upgrade Available"
        }
            
        
        return (
        <div className="game-store-wrapper">
            <div className="store-container">


                <center><h1> RICHE'$ RICHE$</h1></center>
                <div className="rich-greeting">
                    <div>
                        <img src={rich} className="rich-img" />
                    </div>
                    <div>
                        <p> {this.chooseGreeting()}  </p>

                    </div>
                      
                </div>
                    <hr/>
                <div className="store-objects">
                    <center>$RC: {robot.rosscoin}</center>
                    <ul>
                    <li>
                        <div className="item-div">
                                    $RC100: Increase HP by 10
                         <button className="store-btn" onClick={() => this.increaseHp()}>BUY</button>
                        </div>
                    </li>
                    <li>
                        <div className="item-div">
                                    $RC300: 3 Missles
                             <button className="store-btn" onClick={() => this.buyMissile()}>BUY</button>
                            </div>
                    </li>
                    <li>
                        <div className="item-div">
                        $RC400: {weapon}
                                    <button className="store-btn" onClick={(weapon) => this.upgradeWeapon1(weapon)}>BUY</button>
                        </div>
                    </li>
                    <li>
                        <div className="item-div">
                        $RC700: {weapon2}
                                    <button className="store-btn" onClick={(weapon) => this.upgradeWeapon2(weapon)}>BUY</button>
                        </div>
                    </li>
                    <li>
                        <div className="item-div">
                                    $RC400: Increase Evasion by 2
                          <button className="store-btn" onClick={(weapon) => this.increaseEvasion(weapon)}>BUY</button>
                        </div>
                    </li>
                    </ul>
                        
                </div>
                {this.state.message}

                

            </div>
                <div id="" className="robot-store ">
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
                    <Link to="/game"> Back To Map </Link>
                </div>


        </div>)
    }


}

export default withRouter(GameStore);