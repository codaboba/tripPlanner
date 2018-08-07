const mapboxgl = require('mapbox-gl');

module.exports.buildMarker = markerType => {
  let url = '';
  if (markerType === 'activity') url = 'http://i.imgur.com/WbMOfMl.png';
  if (markerType === 'hotel') url = 'http://i.imgur.com/D9574Cu.png';
  if (markerType === 'restaurant') url = 'http://i.imgur.com/cqR6pUI.png';
  const img = document.createElement('IMG');
  img.setAttribute('src', url);
  return new mapboxgl.Marker(img);
};
