import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import kestrel_img from "../../images/kestrel_img.jpg";
import roc_img from "../../images/roc_img.png";
import snow_owl_img from "../../images/snow_owl_img.jpg";
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

    componentWillUnmount(){
        const robot = this.state.robot
        
        // this.props.updateRobot(this.state.robot, this.props.user).then(this.setState({ robot: robot }))
        
    }

    checkMoney(cost){
        if(this.state.robot.rosscoin >= cost){
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
        if(!this.checkMoney(25)){
            return null
        }
        if(robot.hp === robot.hpmax){
            return null
        }else if(robot.hp <= robot.hpmax ){
            if (robot.hp + 10 > robot.hpmax){
                robot.hp = robot.hpmax 
            }
            if (robot.hp + 10 <= robot.hpmax){

                robot.hp += 10
            }
        }
        robot.rosscoin -= 25
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

    upgradeWeapon1(){
        
        if (!this.checkMoney(400)) {
            return null
        }
        const weapon = this.checkWeapon()
        const robot = this.state.robot
        robot.weapon1 = weapon
        robot.rosscoin -= 400
        this.setState({ robot: robot })
    }
    upgradeWeapon2(){
        if (!this.checkMoney(600)) {
            return null
        }
        const weapon2 = this.checkWeapon2()
        const robot = this.state.robot
        robot.weapon2 = weapon2
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
    checkWeapon2(){
        const robot = this.state.robot
        let weapon2
        if(robot.weapon2 === undefined){
            weapon2 = "Mongoose Missile"
        }else if (robot.weapon2 === "Mongoose Missile") {
            weapon2 = "Honey Badger Missile"

        } else if ((robot.weapon2 === "Honey Badger Missile")) {
            weapon2 = "Hellhound Missile"
        } else {
            weapon2 = "No Upgrade Available"
        }
        return weapon2
    }
    checkWeapon(){
        const robot = this.state.robot
        let weapon
        if (robot.weapon1 === "Laser MKI") {
            weapon = "Laser MKII"

        } else if ((robot.weapon1 === "Laser MKII")) {
            weapon = "Laser MKIII"
        } else {
            weapon = "No Upgrade Available"
        }

        
        return weapon
    }
    flee() {
        
       const robot = this.state.robot
        let currentPlanet = this.state.robot.location;
        let planetLink;
        if (currentPlanet === "mars") {
            planetLink = "/game/mars";
        } else if (currentPlanet === "moon"){
            planetLink = "/game";
        }

        this.props.updateRobot(this.state.robot, this.props.user).then(this.setState({ robot: robot })).then(this.props.history.push(planetLink))

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
        if (robot.weapon2 === undefined) {
            weapon2 = "Mongoose Missile"
        } else if (robot.weapon2 === "Mongoose Missile") {
            weapon2 = "Honey Badger Missile"

        } else if ((robot.weapon2 === "Honey Badger Missile")){
            weapon2 = "Hellhound Missile"
        }else{
            weapon2 = "No Upgrade Available"
        }
        let photo;
        if (robot.name === "The Kestrel") {
            photo = kestrel_img
        } else if (robot.name === "The Snowy Owl") {
            photo = snow_owl_img
        } else {
            photo = roc_img
        }

        
        return (
        <div className="game-store-wrapper">
            <div className="store-container">


                <center><h1> BIG MIKE'$ SHOP</h1></center>
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
                                    $RC25: Increase HP by 10
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
                <div className="Rich-Message">{this.state.message}
                </div>

                

            </div>
                <div id="" className="robot-store ">
                    <h2>$RC: {robot.rosscoin}</h2>
                    <h2>{this.state.robot.name}</h2>
                    <center>QP: {robot.qp} </center>
                    <img src={photo} alt="robot" className="robot-img" />
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
                    <a onClick={() => this.flee()}> Back To Map </a>
                </div>


        </div>)
    }


}

export default withRouter(GameStore);