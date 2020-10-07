import React from 'react';
import { withRouter } from 'react-router-dom';

import rich from '../../images/rich.png'



class GameStore extends React.Component{
    constructor(props){
        super(props)
        
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
    

    chooseGreeting(){
        const randomInt = (max) => { return Math.floor(Math.random() * Math.floor(max)) };
        const greeting = ["Hey, hope you had a good break, go grab some coffee, and we'll get started in a moment", 
        "Remember to always finish strong",
        "SnakeCase is what you should be using, I hate when people don't use snakeCase"]
        var array = greeting[randomInt(3)]
        return array
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
        
        return (
        <div className="game-store-wrapper">
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
                        <p>Name: {robot.name}</p> <p>$RC 100</p>
                        </div>
                    </li>
                    <li>
                        <div className="item-div">
                        <p>HP: {robot.hp}</p>
                        <p>$RC 400</p>
                        </div>
                    </li>
                    <li>
                        <div className="item-div">
                        missiles: {robot.missile}
                            <p>$RC 500</p>
                            </div>
                    </li>
                    <li>
                        <div className="item-div">
                        weapon1: {robot.weapon1}
                            <p>$RC 1000</p>
                        </div>
                    </li>
                    <li>
                        <div className="item-div">
                        Weapon2: {robot.weapon2}
                            <p>$RC 2000</p>
                        </div>
                    </li>
                    <li>
                        <div className="item-div">
                        Evasion: {robot.evasion}
                        <p>$RC 400</p>
                        </div>
                    </li>
                    </ul>
                        
                </div>


        </div>)
    }


}

export default withRouter(GameStore);