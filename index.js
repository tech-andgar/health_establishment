// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    const listElement = document.getElementById('establishment-list');
    const filterInput = document.getElementById('filter-input');
    const cityAutocomplete = document.getElementById('city-autocomplete');
    const citiesList = document.getElementById('cities-list');
    const mapElement = document.getElementById('map');
    const toggleListButton = document.getElementById('toggle-list');
    const listSection = document.getElementById('list-section');
    const clearSearchBtn = document.getElementById('clear-search');
    const clearCityBtn = document.getElementById('clear-city');
    const fullscreenMapBtn = document.getElementById('fullscreen-map');
    const mapSection = document.getElementById('map-section');
    
    // Modal elements
    const infoButton = document.getElementById('info-button');
    const infoModal = document.getElementById('info-modal');
    const closeModal = document.querySelector('.close-modal');
    const updateDateElement = document.getElementById('update-date');
    
    // Set current date format for update date
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('es-CO', options);
    if (updateDateElement) {
        updateDateElement.textContent = formattedDate;
    }
    
    // Modal functionality
    if (infoButton && infoModal && closeModal) {
        // Open modal when button is clicked
        infoButton.addEventListener('click', () => {
            infoModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
        });
        
        // Close modal when X is clicked
        closeModal.addEventListener('click', () => {
            infoModal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === infoModal) {
                infoModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && infoModal.style.display === 'block') {
                infoModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    // Store all unique cities
    let allCities = [];

    // --- Map Initialization (Leaflet) ---
    // Initial center on Colombia approx.
    const map = L.map(mapElement).setView([4.57, -74.29], 6);

    // Add Tile Layer (OpenStreetMap is free)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Improve mobile UX by recalculating map size after orientation change
    window.addEventListener('resize', () => {
        setTimeout(() => {
            map.invalidateSize();
        }, 200);
    });

    // Handle toggle list button for mobile
    if (toggleListButton) {
        toggleListButton.addEventListener('click', () => {
            listSection.classList.toggle('mobile-hidden');
            // Force map to recalculate size when toggling list
            setTimeout(() => {
                map.invalidateSize();
            }, 300);
        });
    }

    // Handle fullscreen map button
    if (fullscreenMapBtn) {
        fullscreenMapBtn.addEventListener('click', () => {
            mapSection.classList.toggle('fullscreen');
            // Cambiar el icono según el estado
            if (mapSection.classList.contains('fullscreen')) {
                fullscreenMapBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 14 10 14 10 20"></polyline>
                        <polyline points="20 10 14 10 14 4"></polyline>
                        <line x1="14" y1="10" x2="21" y2="3"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                `;
                document.body.style.overflow = 'hidden';
            } else {
                fullscreenMapBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <polyline points="9 21 3 21 3 15"></polyline>
                        <line x1="21" y1="3" x2="14" y2="10"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                `;
                document.body.style.overflow = '';
            }
            
            // Force map to recalculate size
            setTimeout(() => {
                map.invalidateSize();
            }, 300);
        });
    }

    // Handle clear buttons
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            filterInput.value = '';
            filterInput.focus();
            filterEstablecimientos();
        });
    }
    
    if (clearCityBtn) {
        clearCityBtn.addEventListener('click', () => {
            cityAutocomplete.value = '';
            cityAutocomplete.focus();
            filterEstablecimientos();
        });
    }

    // Store markers to manage them
    const markers = {}; // Use sigla or index as key
    
    // Populate city datalist with unique cities
    function populateCityOptions(items) {
        // Get unique cities
        const cities = [...new Set(items.map(item => item.ciudad).filter(Boolean).sort())];
        allCities = cities;
        
        // Add option for "All cities" at the beginning
        const allOption = document.createElement('option');
        allOption.value = "";
        allOption.textContent = "Todas las ciudades";
        citiesList.appendChild(allOption);
        
        // Add options to the datalist
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            citiesList.appendChild(option);
        });
        
        // Add event listener for city selection
        cityAutocomplete.addEventListener('input', filterEstablecimientos);
    }

    // --- List Generation ---
    function displayList(items) {
        listElement.innerHTML = ''; // Clear previous list

        if (!items || items.length === 0) {
            listElement.innerHTML = '<li class="no-results">No se encontraron establecimientos.</li>';
            return;
        }

        // Display count of results
        const countItem = document.createElement('li');
        countItem.className = 'result-count';
        countItem.innerHTML = `<span>Mostrando ${items.length} resultado${items.length !== 1 ? 's' : ''}</span>`;
        listElement.appendChild(countItem);

        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.dataset.index = index; // Store original index if needed
            li.dataset.sigla = item.sigla || `item-${index}`; // Use sigla or generate an ID

            li.innerHTML = `
                <strong>${item.nombre}</strong>
                <span>${item.ciudad}, ${item.departamento}</span><br>
                <small><i>${item.direccion}</i></small>`;
            
            // Add click listener to list item
            li.addEventListener('click', () => {
                // Find the corresponding marker
                const marker = markers[li.dataset.sigla];
                if (marker) {
                    map.flyTo(marker.getLatLng(), 15); // Zoom and center on the marker
                    marker.openPopup(); // Open its popup
                    
                    // On mobile, hide the list after clicking an item
                    if (window.innerWidth <= 768) {
                        listSection.classList.add('mobile-hidden');
                    }
                } else if (item.latitud && item.longitud) {
                    // Fallback if marker wasn't found but coords exist
                    map.flyTo([item.latitud, item.longitud], 15);
                }
                
                // Highlight the selected item
                document.querySelectorAll('#establishment-list li').forEach(el => {
                    el.classList.remove('active');
                });
                li.classList.add('active');
            });

            listElement.appendChild(li);
        });
    }

    // --- Marker Generation ---
    function addMarkers(items) {
        // Clear existing markers if any
        Object.values(markers).forEach(marker => map.removeLayer(marker));
        
        // Create marker cluster group for better performance
        const markerGroup = L.layerGroup().addTo(map);
        
        items.forEach((item, index) => {
            if (item.latitud && item.longitud) {
                const markerId = item.sigla || `item-${index}`;
                const marker = L.marker([item.latitud, item.longitud]);

                // Create Popup Content
                const popupContent = `
                    <b>${item.nombre}</b><br>
                    ${item.direccion}<br>
                    Ciudad: ${item.ciudad}<br>
                    Tel: ${item.telefono || 'N/A'}<br>
                    Citas: ${item.telefonoCitas || 'N/A'}<br>
                    Horario: ${item.horario || 'N/A'}`;
                marker.bindPopup(popupContent);

                // Add marker to map and store reference
                marker.addTo(markerGroup);
                markers[markerId] = marker;
            } else {
                console.warn(`Establecimiento sin coordenadas: ${item.nombre}`);
            }
        });
    }

    // --- Filtering Logic ---
    function filterEstablecimientos() {
        const searchTerm = filterInput.value.toLowerCase().trim();
        const selectedCity = cityAutocomplete.value;
        
        const filteredItems = establecimientos.filter(item => {
            // First check city filter
            if (selectedCity && item.ciudad !== selectedCity) {
                return false;
            }
            
            // Then check text search
            if (searchTerm) {
                return (
                    (item.nombre?.toLowerCase().includes(searchTerm)) ||
                    (item.ciudad?.toLowerCase().includes(searchTerm)) ||
                    (item.departamento?.toLowerCase().includes(searchTerm)) ||
                    (item.sigla?.toLowerCase().includes(searchTerm)) ||
                    (item.direccion?.toLowerCase().includes(searchTerm))
                );
            }
            
            // If no text search, include all items that passed the city filter
            return true;
        });

        displayList(filteredItems); // Update the list with filtered results
        addMarkers(filteredItems); // Update markers on map
    }
    
    // Add event listeners for filtering
    filterInput.addEventListener('input', filterEstablecimientos);
    
    // Clear filters button functionality
    const clearFilters = () => {
        filterInput.value = '';
        cityAutocomplete.value = '';
        filterEstablecimientos();
        map.setView([4.57, -74.29], 6); // Reset map view to Colombia
    };

    // --- Initial Load ---
    if (typeof establecimientos !== 'undefined' && establecimientos.length > 0) {
        populateCityOptions(establecimientos); // Populate city options
        displayList(establecimientos); // Display the full list initially
        addMarkers(establecimientos); // Add all markers to the map
    } else {
        console.error("Data 'establecimientos' not found or empty. Check data.js");
        listElement.innerHTML = '<li class="no-results">Error al cargar los datos.</li>';
    }

}); // End DOMContentLoaded
