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
              <div className="story-sub-div">
                <div className="story-text">
                  <p>
                    In the year 2069 humanity was changed forever by a
                    monumental discovery:
                  </p>
                  <p>
                    Global warming and melting ice caps revealed an ancient
                    intact alien ship that crashed in the arctic circle untold
                    millennia ago.
                  </p>
                  World leaders battled for salvage rights but only one
                  organization,
                  <a
                    href="https://www.linkedin.com/in/travis-holter-5376771b8/"
                    className="Holtercorp"
                  >
                    Holtercorp™,
                  </a>
                  <p className="Holtercorp-subtext">
                    ended up with the technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="story-div">
              <div className="story-sub-div">
                <div className="story-text">
                  <p>
                    While acquiring great profit, Holtercorp™ changed the world.
                  </p>
                  <p>
                    Warp engines and micro-alloy synthesis allowed humanity to
                    build spaceships and settle other planets in the solar
                    system.
                  </p>

                  <p>
                    Hyperbolic incubation chambers and preserved alien fauna
                    allowed humanity to create an infinite (if somewhat bland)
                    supply of food.
                  </p>
                  <img
                    className="worldimage"
                    src="https://c4.wallpaperflare.com/wallpaper/503/469/209/8-bit-city-buildings-artist-wallpaper-preview.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="story-div">
              <div className="story-sub-div">
                <div className="story-text">
                  <p>
                    For a brief time there was peace and prosperity, until
                    inevitable human greed reshaped the solar system.
                  </p>

                  <img
                    className="Rossimage"
                    src="https://i.pinimg.com/originals/83/80/6c/83806c2d045fd0d7b0be73c6357708b9.png"
                  />
                  <p> A brilliant and evil engineer from Holtercorp™,</p>

                  <a
                    className="RosstheBoss"
                    href="https://www.linkedin.com/in/ross-miglin/"
                  >
                    Ross Miglin
                  </a>
                </div>
              </div>
            </div>
            <div className="story-div">
              <div className="story-sub-div">
                <div className="story-text">
                  <p>
                    The Evil Ross used alien computer technology and blockchain
                    algorithms to devalue all the worlds currency and replaced
                    it with Rosscoin.
                  </p>
                  <p>
                    Overnight he became the wealthiest person in history and
                    every nation on earth became a third world country.
                  </p>
                  <p>
                    Ross used his infinite resources to build a mega fortress on
                    Pluto and put a R60 Billion bounty on his own life, just to
                    troll everyone.
                  </p>
                </div>
              </div>
            </div>
            <div className="story-div">
              <div className="story-sub-div">
                <div className="story-text">
                  <p>The world responded the only way it could:</p>
                  <p>
                    by devolving into a mercenary driven society ruled by
                    whoever had the biggest and coolest giant robot.{" "}
                  </p>
                  <img
                    className="mechimage"
                    src="https://i.pinimg.com/originals/d7/ad/b0/d7adb06c596788cfbfbd86628d6b59ae.png"
                  />
                  <p>
                    Perhaps one day a brave adventurer will build a robot so bad
                    ass that they can travel all the way to Pluto and bring the
                    world’s justice to Ross.
                  </p>
                </div>
              </div>
            </div>
            <div className="story-div">
              <div className="story-sub-div">
                <div className="story-text">
                  Until that day, humanity dreams and waits....
                </div>
                <img
                  className="spaceimage"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ec0373a-f986-4c65-a356-0136b27553e6/d9r4bk8-6133b056-ef9c-462e-816a-1eac494c78d5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMWVjMDM3M2EtZjk4Ni00YzY1LWEzNTYtMDEzNmIyNzU1M2U2XC9kOXI0Yms4LTYxMzNiMDU2LWVmOWMtNDYyZS04MTZhLTFlYWM0OTRjNzhkNS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.xOmx1rewR3TUkG-GTK1LbGo7KinBjU0wNewmhUYXC7Q"
                />

                <div className="robot-selector-div">
                  <Link to="/robots" className="robot-link">
                    Choose a Robot
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }

}

export default withRouter(Story);