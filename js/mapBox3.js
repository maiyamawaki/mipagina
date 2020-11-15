mapboxgl.accessToken = 'pk.eyJ1Ijoiam95bW9pbWFpIiwiYSI6ImNrZWtsYWxnazA3eTAydG92dGlndDk3M3AifQ.keUAcw8bE8p5Igr9HmMZlQ';

var map = new mapboxgl.Map({
  container: 'map', 
  style: 'mapbox://styles/mapbox/streets-v11', 
  center: [135.77199025881043, 35.009855329746316], 
  zoom: 11
});
	
map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
}));
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.FullscreenControl());
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));
map.on('mousemove', function (e) {
    document.getElementById('coordenadas').innerHTML =
        JSON.stringify(e.lngLat);
});