console.log("Loading leaflet")
var map = L.map('map').setView([51.505, -0.09], 13); // Set the initial coordinates and zoom level
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    //heading marker
    

    //boat icon
    var arrowIcon = L.icon({
        iconUrl: 'assets/arrow.png', // Path to your custom icon image
        iconSize: [32, 32],  // Size of the icon
        iconAnchor: [16, 32] // Anchor point of the icon (usually the bottom center)
    });
    var boatIcon = L.icon({
        iconUrl: 'assets/boat.png', // Path to your custom icon image
        iconSize: [32, 32],  // Size of the icon
        iconAnchor: [16, 16] // Anchor point of the icon (usually the bottom center)
    });
    var arrowMarker = L.marker([51.505, -0.09], { icon: arrowIcon, rotationAngle: 90, rotationOrigin: "bottom center" }).addTo(map);
    var boatMarker = L.marker([51.505, -0.09], { icon: boatIcon, rotationOrigin: "center" }).addTo(map);
    function updateBoatPosition(newLat, newLong){
        var newLatLng = L.latLng(newLat, newLong)
        boatMarker.setLatLng(newLatLng)
        arrowMarker.setLatLng(newLatLng)
    }