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

const millenniumPark = buildMarker('activity', [-87.6226, 41.8826]);
const Doc = buildMarker('restaurant', [-87.658376, 41.994718]);

new mapboxgl.Marker().setLngLat([-87.641, 41.895]).addTo(map);
millenniumPark.addTo(map);
Doc.addTo(map);
