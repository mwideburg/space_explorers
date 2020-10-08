import React, { Component } from 'react';
import { Map, GoogleApiWrapper, mapTypes, InfoWindow, Marker } from 'google-maps-react';
import rocket_img from '../../images/rocket.png'
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
            name: "Europa",
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
        const image =
            "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
        const myLatLng = { lat: 0, lng: 0 }
        const myLatLng2 = { lat: 55, lng: -20 }
        const markermap = this.map
        const marker = new google.maps.Marker({
            position: myLatLng,
            markermap,
            icon: image,
            title: "Hello World!",
        });
        const roboImage = {
            url: "https://thumbs.gfycat.com/ThunderousIdealBorzoi-max-1mb.gif",
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 32),
        }
        const repairShop = {
            url: "https://img2.pngio.com/repair-svg-png-icon-free-download-96545-onlinewebfontscom-mechanic-icon-png-981_960.png",
            scaledSize: new google.maps.Size(30, 30),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 32),
        }
        const marker2 = new google.maps.Marker({
            position: myLatLng2,
            markermap,
            icon: roboImage,
            title: "Hello World!",
        });
        const marker3 = new google.maps.Marker({
            position: {lat: -20, lng: 35},
            markermap,
            icon: repairShop,
            title: "Hello World!",
        });
        
        const rocket = new google.maps.Marker({
            position: {lat: 80, lng: -10},
            markermap,
            icon: rocket_img,
           
            title: "Rocket!",
        });
        // this.MarkerManagerUtil.updateMarker()
        const infowindow = new google.maps.InfoWindow({
            content: "<div id='content' color='black'>" + "<a href='/#/game/battle'><h3>HOLTERGEST</h3></a>" + "<p> prepare for battle</p>"+"</div>",
        });
        const infowindow2 = new google.maps.InfoWindow({
            content: "<div id='content' color='black'>" + "<a href='/#/game/battle'><h3>MEGA METAL</h3></a>" + "<p> prepare for battle</p>"+"</div>",
        });
        const infowindow3 = new google.maps.InfoWindow({
            content: "<div id='content' color='black'>" + "<a href='/#/game/store'><h3>ROBOT REPAIR</h3></a>" + "<p> prepare for battle</p>"+"</div>",
        });
        const rocketWindow = new google.maps.InfoWindow({
            content: "<div id='content' color='black'>" + "<a href='/#/game/mars'><h3>TO SPACE!</h3></a>" + "<p> prepare for battle</p>"+"</div>",
        });
        marker.addListener("click", () => {
            infowindow.open(markermap, marker);
        })
        marker2.addListener("click", () => {
            infowindow2.open(markermap, marker2);
        })
        marker3.addListener("click", () => {
            infowindow3.open(markermap, marker3);
        })
        rocket.addListener("click", () => {
            infowindow3.open(markermap, rocket);
        })
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