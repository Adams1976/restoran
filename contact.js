import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = ''; 

    const heading = document.createElement('h1');
    heading.textContent = 'Контакты';

    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'Телефон: +123 456 7890\nEmail: urbanbites@.com';
    contactInfo.classList.add('contactInfo');

    const mapContainer = document.createElement('div');
    mapContainer.id = 'map';
    mapContainer.style.height = '500px';
    mapContainer.style.width = '1100px';

    mapContainer.style.marginTop = '150px';
    mapContainer.style.marginLeft = '400px';


    content.appendChild(heading);
    content.appendChild(contactInfo);
    content.appendChild(mapContainer);

    const map = L.map('map').setView([43.3178, 45.6985], 12); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

 
    const marker = L.marker([43.3178, 45.6985]).addTo(map); 
    marker.bindPopup('Грозный, Чеченская Республика').openPopup();
}