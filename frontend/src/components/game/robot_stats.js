import React from 'react';
import { withRouter } from 'react-router-dom';
import "./robot-game.scss"

const Robot = (robot) => {
    // debugger
    const stats = (robot) => {
        return (
            <ul className="robot-stat-list">
                <li>
                    {robot.hp}
                </li>
                <li>
                    {robot.weapon1}
                </li>
                <li>
                    {robot.weapon2}
                </li>
                <li>
                    {robot.missles}
                </li>
                <li>
                    {robot.evasion}
                </li>
            </ul>
        )
    }
    return(
        <div className="robot-current-stats">
            <div className="robot-img">
                <img src={robot.photoUrl} alt="robot"/>
            </div>
            <div className="robot-stats">
                {stats}
            </div>
        </div>
    )
}

export default Robot
