// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    const listElement = document.getElementById('establishment-list');
    const filterInput = document.getElementById('filter-input');
    const cityAutocomplete = document.getElementById('city-autocomplete');
    const citiesList = document.getElementById('cities-list');
    const mapElement = document.getElementById('map');
    
    // Get references to new view control buttons
    const viewListBtn = document.getElementById('view-list-btn');
    const viewBothBtn = document.getElementById('view-both-btn');
    const viewMapBtn = document.getElementById('view-map-btn');
    const viewControlButtons = [viewListBtn, viewBothBtn, viewMapBtn];
    
    // Secciones principales
    const listSection = document.getElementById('list-section');
    const mapSection = document.getElementById('map-section');
    
    // Otros elementos de la UI
    const clearSearchBtn = document.getElementById('clear-search');
    const clearCityBtn = document.getElementById('clear-city');
    
    // Modal elements
    const infoButton = document.getElementById('info-button');
    const infoModal = document.getElementById('info-modal');
    const closeModal = document.querySelector('.close-modal');
    const updateDateElement = document.getElementById('update-date');
    
    // Store markers to manage them - THIS WAS MISSING
    const markers = {};
    
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

    // Improve map resizing using ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
        // Add a small delay to ensure layout calculation is complete
        setTimeout(() => map.invalidateSize(), 100);
    });
    if (mapElement) {
        resizeObserver.observe(mapElement);
    }

    // --- NEW VIEW CONTROL LOGIC ---

    /**
     * Sets the view mode by adding a class to the body and updating button states.
     * @param {'list' | 'both' | 'map'} mode The desired view mode.
     */
    function setViewMode(mode) {
        const body = document.body;
        
        // Remove existing view mode classes
        body.classList.remove('view-mode-list', 'view-mode-both', 'view-mode-map');
        
        // Add the new view mode class
        if (mode === 'list') {
            body.classList.add('view-mode-list');
        } else if (mode === 'map') {
            body.classList.add('view-mode-map');
        } else {
            // Default or 'both'
            body.classList.add('view-mode-both'); 
        }
        
        // Update active state for buttons
        viewControlButtons.forEach(btn => {
            if (btn) { // Ensure button exists before trying to modify classList
                btn.classList.remove('active');
                if ((mode === 'list' && btn === viewListBtn) ||
                    (mode === 'map' && btn === viewMapBtn) ||
                    ((mode === 'both' || !mode) && btn === viewBothBtn)) { // Default to 'both'
                    btn.classList.add('active');
                }
            }
        });

        // Invalidate map size after a short delay to allow layout changes
        // Crucial for Leaflet to render correctly when its container size changes
        setTimeout(() => {
            map.invalidateSize();
        }, 150); // Adjust delay if needed, 150ms often works well
    }

    // Add event listeners to the new view control buttons
    if (viewListBtn) {
        viewListBtn.addEventListener('click', () => setViewMode('list'));
    }
    if (viewBothBtn) {
        viewBothBtn.addEventListener('click', () => setViewMode('both'));
    }
    if (viewMapBtn) {
        viewMapBtn.addEventListener('click', () => setViewMode('map'));
    }
    
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
                // Highlight the selected item first
                document.querySelectorAll('#establishment-list li').forEach(el => {
                    el.classList.remove('active');
                });
                li.classList.add('active');
                
                // Find the corresponding marker
                const marker = markers[li.dataset.sigla];
                
                if (marker) {
                    // Fly to the marker and open popup
                    map.flyTo(marker.getLatLng(), 15);
                    marker.openPopup();
                } else if (item.latitud && item.longitud) {
                    // Fallback: Fly to coordinates if marker not found
                    map.flyTo([item.latitud, item.longitud], 15);
                }
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
        // Set the initial view mode explicitly after data is loaded
        setViewMode('both'); 
    } else {
        console.error("Data 'establecimientos' not found or empty. Check data.js");
        listElement.innerHTML = '<li class="no-results">Error al cargar los datos.</li>';
    }

}); // End DOMContentLoaded
