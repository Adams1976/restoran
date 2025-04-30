import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function loadMap() {
    const content = document.getElementById('content');
    content.innerHTML = ''; 

    const heading = document.createElement('h1');
    heading.textContent = 'Карта России';
    heading.style.textAlign = 'center';

    const mapContainer = document.createElement('div');
    mapContainer.id = 'map';
    mapContainer.style.height = '500px';
    mapContainer.style.margin = '20px';

    content.appendChild(heading);
    content.appendChild(mapContainer);

    const map = L.map('map').setView([61.524, 105.3188], 4); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}
