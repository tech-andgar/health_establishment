// Variables globales
let establishments = [];
let markers = [];
let currentMarker = null;
let map;
let infoWindow;
let currentView = 'split'; // 'split', 'map', 'list'

// Elementos del DOM
const searchInput = document.getElementById('search-input');
const citySearchInput = document.getElementById('city-search-input');
const typeFilterSelect = document.getElementById('type-filter');
const clearSearchBtn = document.getElementById('clear-search');
const clearCityBtn = document.getElementById('clear-city');
const clearTypeBtn = document.getElementById('clear-type');
const establishmentList = document.getElementById('establishment-list');
const resultCount = document.getElementById('result-count');
const viewControls = document.querySelectorAll('.view-control-btn');
const panels = document.querySelectorAll('.panel');
const infoButton = document.getElementById('info-button');
const modal = document.getElementById('info-modal');
const closeModal = document.querySelector('.close-modal');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    loadEstablishments();
    setupEventListeners();
});

// Inicializar el mapa
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.6037, lng: -58.3816 }, // Buenos Aires
        zoom: 12
    });
    
    infoWindow = new google.maps.InfoWindow();
}

// Cargar datos de establecimientos
async function loadEstablishments() {
    try {
        const response = await fetch('data/establecimientos.json');
        establishments = await response.json();
        filterAndDisplayEstablishments();
    } catch (error) {
        console.error('Error al cargar los establecimientos:', error);
    }
}

// Configurar event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', filterAndDisplayEstablishments);
    citySearchInput.addEventListener('input', filterAndDisplayEstablishments);
    typeFilterSelect.addEventListener('change', filterAndDisplayEstablishments);
    
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        filterAndDisplayEstablishments();
    });
    
    clearCityBtn.addEventListener('click', () => {
        citySearchInput.value = '';
        filterAndDisplayEstablishments();
    });
    
    clearTypeBtn.addEventListener('click', () => {
        typeFilterSelect.value = '';
        filterAndDisplayEstablishments();
    });
    
    viewControls.forEach(control => {
        control.addEventListener('click', () => {
            const view = control.dataset.view;
            setView(view);
        });
    });
    
    infoButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });
    
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Filtrar y mostrar establecimientos
function filterAndDisplayEstablishments() {
    const searchTerm = searchInput.value.toLowerCase();
    const cityTerm = citySearchInput.value.toLowerCase();
    const selectedType = typeFilterSelect.value;
    
    const filteredEstablishments = establishments.filter(establishment => {
        const matchesSearch = establishment.nombre.toLowerCase().includes(searchTerm);
        const matchesCity = establishment.ciudad.toLowerCase().includes(cityTerm);
        const matchesType = selectedType === '' || establishment.tipo === selectedType;
        
        return matchesSearch && matchesCity && matchesType;
    });
    
    displayEstablishments(filteredEstablishments);
    updateMarkers(filteredEstablishments);
    updateResultCount(filteredEstablishments.length);
}

// Mostrar establecimientos en la lista
function displayEstablishments(establishments) {
    establishmentList.innerHTML = '';
    
    if (establishments.length === 0) {
        establishmentList.innerHTML = '<li class="no-results">No se encontraron resultados</li>';
        return;
    }
    
    establishments.forEach(establishment => {
        const li = document.createElement('li');
        li.textContent = establishment.nombre;
        li.addEventListener('click', () => {
            highlightEstablishment(establishment);
        });
        establishmentList.appendChild(li);
    });
}

// Actualizar marcadores en el mapa
function updateMarkers(establishments) {
    // Limpiar marcadores existentes
    markers.forEach(marker => marker.setMap(null));
    markers = [];
    
    establishments.forEach(establishment => {
        const marker = new google.maps.Marker({
            position: { lat: establishment.latitud, lng: establishment.longitud },
            map: map,
            title: establishment.nombre
        });
        
        marker.addListener('click', () => {
            highlightEstablishment(establishment);
        });
        
        markers.push(marker);
    });
}

// Resaltar establecimiento seleccionado
function highlightEstablishment(establishment) {
    // Remover resaltado anterior
    const previousActive = establishmentList.querySelector('.active');
    if (previousActive) {
        previousActive.classList.remove('active');
    }
    
    // Resaltar en la lista
    const listItem = Array.from(establishmentList.children).find(
        li => li.textContent === establishment.nombre
    );
    if (listItem) {
        listItem.classList.add('active');
        listItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // Actualizar marcador en el mapa
    if (currentMarker) {
        currentMarker.setMap(null);
    }
    
    currentMarker = new google.maps.Marker({
        position: { lat: establishment.latitud, lng: establishment.longitud },
        map: map,
        title: establishment.nombre,
        animation: google.maps.Animation.DROP
    });
    
    // Centrar mapa en el establecimiento
    map.setCenter({ lat: establishment.latitud, lng: establishment.longitud });
    map.setZoom(15);
    
    // Mostrar información
    const content = `
        <div class="info-window">
            <h3>${establishment.nombre}</h3>
            <p><strong>Tipo:</strong> ${establishment.tipo}</p>
            <p><strong>Ciudad:</strong> ${establishment.ciudad}</p>
            <p><strong>Dirección:</strong> ${establishment.direccion}</p>
        </div>
    `;
    
    infoWindow.setContent(content);
    infoWindow.open(map, currentMarker);
}

// Actualizar contador de resultados
function updateResultCount(count) {
    resultCount.textContent = `${count} establecimiento${count !== 1 ? 's' : ''} encontrado${count !== 1 ? 's' : ''}`;
}

// Cambiar vista
function setView(view) {
    currentView = view;
    
    viewControls.forEach(control => {
        control.classList.toggle('active', control.dataset.view === view);
    });
    
    panels.forEach(panel => {
        panel.style.display = 'none';
    });
    
    if (view === 'split') {
        document.getElementById('list-panel').style.display = 'block';
        document.getElementById('map-panel').style.display = 'block';
    } else if (view === 'map') {
        document.getElementById('map-panel').style.display = 'block';
    } else if (view === 'list') {
        document.getElementById('list-panel').style.display = 'block';
    }
} 
