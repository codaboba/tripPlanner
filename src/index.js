const { buildMarker } = require('./marker');

const mapboxgl = require('mapbox-gl');
mapboxgl.accessToken =
  'pk.eyJ1IjoicGhhbm55Y29kZXMiLCJhIjoiY2prazRwcHM1MDNqbzN2cGw3MGRsaXF1ZiJ9.6pYqWruzJiNU_aU9mu8dYA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885],
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const millenniumPark = buildMarker('activity');
console.log('millienniumPark:', millenniumPark);

new mapboxgl.Marker().setLngLat([-87.641, 41.895]).addTo(map);
millenniumPark.setLngLat([-87.6226, 41.8826]).addTo(map);
