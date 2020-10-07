import React, { Component } from 'react';
import { Map, GoogleApiWrapper, mapTypes, InfoWindow, Marker } from 'google-maps-react';
// import MarkerManagerUtil from '../../util/marker_manager'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class MoonMap extends React.Component {
    componentDidMount() {
        const { google } = this.props;
        const maps = google.maps;
        const MARS_BOUNDS = {
            north: 80,
            south: -80.35,
            west: -500,
            east: 500,
        };
        const mapStyles = {
            width: '100%',
            height: '100%',
            overflow: 'visable'
        };
        this.map = new google.maps.Map(this.mapNode, {
            center: { lat: 0, lng: 0 },
            zoom: 6,
            minZoom: 1,
            style: {mapStyles},
            restriction: {
                latLngBounds: MARS_BOUNDS,
                strictBounds: false,
            },
            streetViewControl: false,
            mapTypeControlOptions: {
                mapTypeIds: ["mars_elevation"],
            },
        });
        // this.MarkerManagerUtil = new MarkerManagerUtil(this.map)
        const getHorizontallyRepeatingTileUrl = (coord, zoom, urlfunc) => {
            var y = coord.y;
            var x = coord.x;

            // tile range in one direction range is dependent on zoom level
            // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
            var tileRange = 1 << zoom;

            // don't repeat across y-axis (vertically)
            if (y < 0 || y >= tileRange) {
                return null;
            }

            // repeat across x-axis
            if (x < 0 || x >= tileRange) {
                x = (x % tileRange + tileRange) % tileRange;
            }

            return urlfunc({ x: x, y: y }, zoom)
        }

        const getMarsTileUrl = (baseUrl, coord, zoom) => {
            var bound = Math.pow(2, zoom);
            var x = coord.x;
            var y = coord.y;
            var quads = ['t'];

            for (var z = 0; z < zoom; z++) {
                bound = bound / 2;
                if (y < bound) {
                    if (x < bound) {
                        quads.push('q');
                    } else {
                        quads.push('r');
                        x -= bound;
                    }
                } else {
                    if (x < bound) {
                        quads.push('t');
                        y -= bound;
                    } else {
                        quads.push('s');
                        x -= bound;
                        y -= bound;
                    }
                }
            }

            return baseUrl + quads.join('') + ".jpg";
        }

        const moonMapType = new google.maps.ImageMapType({
            getTileUrl: function (coord, zoom) {
                return getHorizontallyRepeatingTileUrl(coord, zoom, function (coord, zoom) {
                    return getMarsTileUrl("http://mw1.google.com/mw-planetary/mars/elevation/", coord, zoom);
                });
            },
            tileSize: new google.maps.Size(256, 256),
            isPng: false,
            maxZoom: 8,
            radius: 3396200,
            name: 'Nicks Atom',
            credit: 'Image Credit: NASA/JPL/GSFC'
        });
        this.map.mapTypes.set("mars_elevation", moonMapType);
        this.map.setMapTypeId("mars_elevation");

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
        const myLatLng2 = { lat: 10, lng: 20 }
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
            position: {lat: -70, lng: -20},
            markermap,
            icon: repairShop,
            title: "Hello World!",
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
        marker.addListener("click", () => {
            infowindow.open(markermap, marker);
        })
        marker2.addListener("click", () => {
            infowindow2.open(markermap, marker2);
        })
        marker3.addListener("click", () => {
            infowindow3.open(markermap, marker3);
        })
        marker.setMap(markermap);
        marker2.setMap(markermap);
        marker3.setMap(markermap);
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
})(MoonMap);