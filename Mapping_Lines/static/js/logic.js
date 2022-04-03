// Add console.log to check to see if our code is working.
console.log("working");

// Add a Map Object
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],   //  Los Angeles International Airport (LAX)
    [37.6213, -122.3790],   // San Francisco International Airport (SFO)
    [40.7899, -111.9791],   // Salt Lake City International Airport (SLC)
    [47.4502, -122.3088]    // Seattle-Tacoma International Airport (SEA)
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
  }).addTo(map);

// // Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city; bind a Popup to the Marker; format the population with a thousands separator
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

// modified to Use the Mapbox Styles API
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// // modified code to use dark layer; SKILL DRILL
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);