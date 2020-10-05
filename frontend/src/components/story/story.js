
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import "./story.scss"
import NavBarContainer from '../nav/navbar_container';
class Story extends React.Component {
    constructor(props) {
        super(props);

       
    }
    


    nextSlide(e){

    }



    render() {
        let slide1 = <p className="story-text">
            Sample intro storyIn the year 2069 humanity was changed forever by
            a monumental discovery: Global warming and melting ice caps revealed
            an ancient intact alien ship that crashed in the arctic circle untold
            millennia  ago.
            World leaders battled for salvage rights but only one organization, Holtercorp™, ended up with the technology. While acquiring great profit, Holtercorp™
            changed the world. Warp engines and micro-alloy synthesis
            allowed humanity to build spaceships and settle other planets
            in the solar system. Hyperbolic incubation chambers and preserved alien fauna allowed humanity to create an infinite (if somewhat bland) supply of food.
                </p>
        let slide2 = <p className="story-text">
            For a brief time there was peace and prosperity, until inevitable human greed 
            reshaped the solar system. A brilliant and evil engineer from Holtercorp™, 
            Ross Miglin, used alien computer technology and blockchain algorithms 
            to devalue all the worlds currency and replaced it with ¢Rosscoin. 
            Overnight he became the wealthiest person in history and every nation 
            on earth became a third world country. Ross used his infinite resources 
            to build a mega fortress on Pluto and put a ¢60 Billion
                </p>
        let slide3 = <p className="story-text">
            Sample intro storyIn the year 2069 humanity was changed forever by
            a monumental discovery: Global warming and melting ice caps revealed
            an ancient intact alien ship that crashed in the arctic circle untold
            millennia  ago.
            World leaders battled for salvage rights but only one organization, Holtercorp™, ended up with the technology. While acquiring great profit, Holtercorp™
            changed the world. Warp engines and micro-alloy synthesis
            allowed humanity to build spaceships and settle other planets
            in the solar system. Hyperbolic incubation chambers and preserved alien fauna allowed humanity to create an infinite (if somewhat bland) supply of food.
                </p>

        return (
            <div className="wrapper">

            
            <div className="story-container">
                {slide1}
                <div className="robot-selector-div">
                    <Link to="/robots" className="robot-link">Choose a Robot</Link>
                </div>
            </div>



            </div>
        );
    }
}

export default withRouter(Story);