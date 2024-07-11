let map = L.map('map').setView([37.3997, -5.9936], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let routingControl = L.Routing.control({
    waypoints: [
        L.latLng(37.3997, -5.9936) // punto de destino (ubicación empresa)
    ],
    routeWhileDragging: true,
    geocoder: L.Control.Geocoder.nominatim(),
    createMarker: function() { return null; } // evita crear marcadores adicionales
}).addTo(map);

// función obtener ubicación cliente
function locateUser() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            let userLatLng = L.latLng(position.coords.latitude, position.coords.longitude);

            // actualizar puntos de referencia ubicación del cliente
            routingControl.setWaypoints([userLatLng, L.latLng(37.3997, -5.9936)]);

            // añadir marcador ubicación cliente
            L.marker(userLatLng).addTo(map).bindPopup("Tu ubicación").openPopup();

            // centrar mapa ubicación cliente
            map.setView(userLatLng, 15);
        }, error => {
            console.error("Error obteniendo la ubicación: ", error);
        });
    } else {
        alert("La geolocalización no es compatible con este navegador.");
    }
}

locateUser();