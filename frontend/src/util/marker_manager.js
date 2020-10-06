


import React, { Component } from 'react';
import { Map, GoogleApiWrapper, mapTypes, MarkerManager } from 'google-maps-react';


export default class MarkerManagerUtil{
    constructor(map){
        
        
        const maps = google.maps;
        this.google.maps = maps
        this.map = map;
        // this.markers = {}
        this.state = {
            markers: {}
        }
        this.updateMarker = this.updateMarker.bind(this)
        this.createMarkerFromSpot = this.createMarkerFromSpot.bind(this)
        this.removeMarker = this.removeMarker.bind(this)
    }

    updateMarker(){
        
        let createMarkerFromSpot = this.createMarkerFromSpot
        // debugger
        
        
            createMarkerFromSpot()
        
            
    }

    createMarkerFromSpot(){
        const { google } = this.props;
        const maps = this.google.maps;
        // debugger
        const contentString =
            '<div id="content">' +
            '<div >' +
            "</div>" +
            
            "</div>" +
            "</div>";
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });
        let myLatLng = {lat: Number(40), lng: Number(40)}
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            title: "Hello World"
        });
        marker.addListener("mouseover", () => {
            infowindow.open(this.map, marker);
            
        });
        marker.addListener("mouseout", () => {
            infowindow.close(this.map, marker);
        });
        marker.addListener("click", () => {
            infowindow.close(this.map, marker);
        });
        return this.state.markers[23] = {enemy: "Holtergest"}
        // return marker.setMap(this.map)
    }

    removeMarker(marker){
       delete this.state.markers[marker.id]
    }
}