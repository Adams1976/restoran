import loadHome from './home.js';
import loadMenu from './menu.js'; // Исправлен путь
import loadContact from './contact.js';
import loadMap from './map.js';

import './style.css';

function createTabs() {
    const tabs = document.createElement('div');
    tabs.id = 'tabs';

    const homeTab = document.createElement('button');
    homeTab.textContent = 'Главное';
    homeTab.addEventListener('click', loadHome);

    const menuTab = document.createElement('button');
    menuTab.textContent = 'Меню';
    menuTab.addEventListener('click', loadMenu);

    const contactTab = document.createElement('button');
    contactTab.textContent = 'Контакты';
    contactTab.addEventListener('click', loadContact);

   

    tabs.appendChild(homeTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactTab);
   

    document.body.insertBefore(tabs, document.getElementById('content'));
}

function initializeWebsite() {
    createTabs();
    loadHome();
}

initializeWebsite();