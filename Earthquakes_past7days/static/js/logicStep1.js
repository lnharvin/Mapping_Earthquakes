// Add console.log to check to see if our code is working.
console.log("working");

// NOTE: Having the tileLayer() method before accessing large datasets ensures that the map gets loaded before the data is added to it.

// modified to Use the Mapbox Styles API
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satellitestreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satellitestreets
};

// Create the map object with center, zoom level and default layer of the geographic center of the United States.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//  USGS URL for earthquake data
let allWeekQuakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Grabbing our GeoJSON data
d3.json(allWeekQuakeData, function(data) {
  console.log(data);
  L.geoJSON(data).addTo(map);
});

// // SKILL DRILL 
// // Create a style for the lines.
// let myStyle = {
//   color: "#ffff00",
//   weight: 1,
//   fill: "#ffffa1"
// }
// // Grabbing our GeoJSON data
// d3.json(torontoHoods, function(data) {
//   console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//     style: myStyle,
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("<h3>Neighborhood: " + feature.properties.AREA_NAME + "</h3>");
//     }
//   })
//   .addTo(map);
// });
