import React, { Component } from 'react';
import { Map, GoogleApiWrapper, mapTypes, InfoWindow, Marker } from 'google-maps-react';
import rocket_img from '../../images/rocket.png';
import rich_image from "../../images/rich_image.png";
import mech from "../../images/mech.gif";
// import MarkerManagerUtil from '../../util/marker_manager'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class MarsMap extends React.Component {
    componentDidMount() {
        
        const { google } = this.props;
        const maps = google.maps;
        const MOON_BOUNDS = {
            north: 80,
            south: -80.35,
            west: -200,
            east: 200,
        };
        const robot = this.props.robot
        robot.location = "moon"
        if (robot.location === 'mars') {
            this.props.setRobotLocation(robot)
        } 
        
        this.map = new google.maps.Map(this.mapNode, {
            center: { lat: 0, lng: 0 },
            zoom: 3,
            minZoom: 2,
            restriction: {
                latLngBounds: MOON_BOUNDS,
                strictBounds: false,
            },
            streetViewControl: false,
            mapTypeControlOptions: {
                mapTypeIds: ["moon"],
            },
        });
        // this.MarkerManagerUtil = new MarkerManagerUtil(this.map)
        
        const getNormalizedCoord = (coord, zoom) => {
            const y = coord.y;
            let x = coord.x;
            // tile range in one direction range is dependent on zoom level
            // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
            const tileRange = 1 << zoom;

            // don't repeat across y-axis (vertically)
            if (y < 0 || y >= tileRange) {
                return null;
            }

            // repeat across x-axis
            if (x < 0 || x >= tileRange) {
                x = ((x % tileRange) + tileRange) % tileRange;
            }
            return { x: x, y: y };
        }

        const moonMapType = new google.maps.ImageMapType({
            getTileUrl: function (coord, zoom) {
                const normalizedCoord = getNormalizedCoord(coord, zoom);

                if (!normalizedCoord) {
                    return "";
                }
                const bound = Math.pow(2, zoom);
                return (
                    "https://mw1.google.com/mw-planetary/lunar/lunarmaps_v1/clem_bw" +
                    "/" +
                    zoom +
                    "/" +
                    normalizedCoord.x +
                    "/" +
                    (bound - normalizedCoord.y - 1) +
                    ".jpg"
                );
            },
            tileSize: new google.maps.Size(256, 256),
            maxZoom: 9,
            minZoom: 0,

            radius: 1738000,
            name: "Moon",
        });

        this.map.mapTypes.set("moon", moonMapType);
        this.map.setMapTypeId("moon");
        const updateSpots = this.props.updateSpots
        this.map.addListener('bounds_changed', function () {
            // debugger
            let northeast = this.getBounds().getNorthEast();
            let southwest = this.getBounds().getSouthWest();
            // debugger
            let bounds = this.getBounds()

            let lat = bounds.getNorthEast().lat();
            let lat2 = bounds.getSouthWest().lat();
            let lng = bounds.getNorthEast().lng();
            let lng2 = bounds.getSouthWest().lng();

            let positions = { bounds: { lat: [lat, lat2], lng: [lng, lng2] } }

            // debugger
            console.log('updated')
            // updateBounds(bounds)
            
        })
        const image = {
          url:"https://i.gifer.com/origin/1f/1f2537df2f9b0f9a583054ccef4946c7_w200.gif",
          scaledSize: new google.maps.Size(50, 50),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 32),
        };
        const myLatLng = { lat: 0, lng: 0 }
        const myLatLng2 = { lat: 55, lng: -20 }
        const markermap = this.map
        const marker = new google.maps.Marker({
            position: myLatLng,
            markermap,
            icon: image,
            title: "Hard Battle",
        });
        const roboImage = {
            url: "https://thumbs.gfycat.com/ThunderousIdealBorzoi-max-1mb.gif",
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 32),
        }
        // const repairShop = {
        //     url: "../../images/rich_image.png",
        //     scaledSize: new google.maps.Size(30, 30),
        //     origin: new google.maps.Point(0, 0),
        //     anchor: new google.maps.Point(0, 32),
        // }
        
        const marker2 = new google.maps.Marker({
            position: myLatLng2,
            markermap,
            icon: mech,
            title: "Mega Metal",
        });
        const marker3 = new google.maps.Marker({
            position: {lat: -20, lng: 35},
            markermap,
            icon: rich_image,
            title: "Riches Riches",
        });
        
        const rocket = new google.maps.Marker({
            position: {lat: 20, lng: -10},
            markermap,
            icon: rocket_img,
           
            title: "Go Travel",
        });
 
        // this.MarkerManagerUtil.updateMarker()
         let x;
         if (this.props.robot.qp > 0) {
             
           x =
             "<div id='content' color='black'>" +
             "<a href='/#/game/mars'><h3>TO MARS!</h3></a>" +
             "<center><p> new enemies await </p></center>" +
             "</div>";
         } else {
           x =
             "<div id='content' color='white'>" +
             "<h3>YOU CAN'T LAUNCH YET!</h3>" +
             "</div>";
         }
         // this.MarkerManagerUtil.updateMarker()
         const infowindow = new google.maps.InfoWindow({
           content:
             "<div id='content' color='black'>" +
             "<a href='/#/game/battle'><h3>Enter Battle</h3></a>" +
             "</div>",
         });
         const infowindow2 = new google.maps.InfoWindow({
           content:
             "<div id='content' color='black'>" +
             "<a href='/#/game/battle'><h3>Enter Battle</h3></a>" +
             "</div>",
         });
         const infowindow3 = new google.maps.InfoWindow({
           content:
             "<div id='content' color='black'>" +
             "<a href='/#/game/store'><h3>Rich's Riches</h3></a>" +
             "<p> repair your robot</p>" +
             "</div>",
         });
         const rocketWindow = new google.maps.InfoWindow({
           content: x,
         });
         marker.addListener("click", () => {
           infowindow.open(markermap, marker);
         });
         marker2.addListener("click", () => {
           infowindow2.open(markermap, marker2);
         });
         marker3.addListener("click", () => {
           infowindow3.open(markermap, marker3);
         });
         rocket.addListener("click", () => {
           rocketWindow.open(markermap, rocket);
         });
        marker.setMap(markermap);
        marker2.setMap(markermap);
        marker3.setMap(markermap);
        rocket.setMap(markermap);
       
    }
    componentDidUpdate() {
       
    }

    render() {
        const mapStyles2 = {
            width: '900px',
            height: '500px',
            overflow: 'visable',
            position: 'relative',
            color: 'black'
        
        };
        
        return (
            <div id='map-container2'>
                <div ref={map => this.mapNode = map} id='map-container' style={mapStyles2}>

                </div>
            </div>

        );
    }
}

export default GoogleApiWrapper({
    
    apiKey: 'AIzaSyAIt7Jp8FA4nafxdv6Ve3LDcaOrlPzaPOA'
})(MarsMap);