import Slider from 'react-slick';
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import "./story.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBarContainer from '../nav/navbar_container';
class Story extends React.Component {
  constructor(props) {
    super(props);
  }

  // nextSlide(e){

  // }

  render() {
    var settings = {
      //dots: true,
      //infinite: true,
      loop: false,
      useCSS: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="wrapper">
        <div className="story-container">
          <Slider {...settings} className="slider">
            <div className="story-div">
              <p className="story-text">
                In the year 2069 humanity was changed forever by a monumental
                discovery: Global warming and melting ice caps revealed an
                ancient intact alien ship that crashed in the arctic circle
                untold millennia ago. World leaders battled for salvage rights
                but only one organization, Holtercorp™, ended up with the
                technology.
              </p>
            </div>
            <div className="story-div">
              <p className="story-text">
                While acquiring great profit, Holtercorp™ changed the world.
                Warp engines and micro-alloy synthesis allowed humanity to build
                spaceships and settle other planets in the solar system.
                Hyperbolic incubation chambers and preserved alien fauna allowed
                humanity to create an infinite (if somewhat bland) supply of
                food.
              </p>
            </div>
            <div className="story-div">
              <p className="story-text">
                For a brief time there was peace and prosperity, until
                inevitable human greed reshaped the solar system. A brilliant
                and evil engineer from Holtercorp™, Ross Miglin, used alien
                computer technology and blockchain algorithms to devalue all the
                worlds currency and replaced it with ℞osscoin.
              </p>
            </div>
            <div className="story-div">
              <p className="story-text">
                Overnight he became the wealthiest person in history and every
                nation on earth became a third world country. Ross used his
                infinite resources to build a mega fortress on Pluto and put a
                ℞60 Billion bounty on his own life, just to troll everyone.
              </p>
            </div>
            <div className="story-div">
              <p className="story-text">
                The world responded the only way it could: by devolving into a
                mercenary driven society ruled by whoever had the biggest and
                coolest giant robot. Perhaps one day a brave adventurer will
                build a robot so bad ass that they can travel all the way to
                Pluto and bring the world’s justice to Ross.
              </p>
            </div>
            <div className="story-div">
              <p className="story-text">
                Until that day, humanity dreams and waits....
              </p>
              <div className="robot-selector-div">
                <Link to="/robots" className="robot-link">
                  Choose a Robot
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }

//   render() {
//     let slide1 = (
//       <p className="story-text">
//         Sample intro storyIn the year 2069 humanity was changed forever by a
//         monumental discovery: Global warming and melting ice caps revealed an
//         ancient intact alien ship that crashed in the arctic circle untold
//         millennia ago. World leaders battled for salvage rights but only one
//         organization, Holtercorp™, ended up with the technology. While acquiring
//         great profit, Holtercorp™ changed the world. Warp engines and
//         micro-alloy synthesis allowed humanity to build spaceships and settle
//         other planets in the solar system. Hyperbolic incubation chambers and
//         preserved alien fauna allowed humanity to create an infinite (if
//         somewhat bland) supply of food.
//       </p>
//     );
//     let slide2 = (
//       <p className="story-text">
//         For a brief time there was peace and prosperity, until inevitable human
//         greed reshaped the solar system. A brilliant and evil engineer from
//         Holtercorp™, Ross Miglin, used alien computer technology and blockchain
//         algorithms to devalue all the worlds currency and replaced it with
//         ¢Rosscoin. Overnight he became the wealthiest person in history and
//         every nation on earth became a third world country. Ross used his
//         infinite resources to build a mega fortress on Pluto and put a ¢60
//         Billion
//       </p>
//     );
//     let slide3 = (
//       <p className="story-text">
//         Sample intro storyIn the year 2069 humanity was changed forever by a
//         monumental discovery: Global warming and melting ice caps revealed an
//         ancient intact alien ship that crashed in the arctic circle untold
//         millennia ago. World leaders battled for salvage rights but only one
//         organization, Holtercorp™, ended up with the technology. While acquiring
//         great profit, Holtercorp™ changed the world. Warp engines and
//         micro-alloy synthesis allowed humanity to build spaceships and settle
//         other planets in the solar system. Hyperbolic incubation chambers and
//         preserved alien fauna allowed humanity to create an infinite (if
//         somewhat bland) supply of food.
//       </p>
//     );

//     return (
//       <div className="wrapper">
//         <div className="story-container">
//           {slide1}
//           <div className="robot-selector-div">
//             <Link to="/robots" className="robot-link">
//               Choose a Robot
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }
}

export default withRouter(Story);