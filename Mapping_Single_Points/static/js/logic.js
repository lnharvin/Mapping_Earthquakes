// Add console.log to check to see if our code is working.
console.log("working");

// Add a Map Object
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

////  Add a marker to the map for Los Angeles, California. ... simple marker
//let marker = L.marker([34.0522, -118.2437]).addTo(map); 

// // below code will Add a Cirlce to the Map as our marker
// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

 // Use the circleMarker function as an alternative for creating a circle on the map; SKILL DRILL
 L.circleMarker([34.0522, -118.2437], {
    radius: 100,    //radius: 300,
    color: "black",
    fillColor: '#ffffa1'
 }).addTo(map);


// // modified to Use the Mapbox Styles API
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// modified code to use dark layer; SKILL DRILL
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);