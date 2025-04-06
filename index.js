// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    const listElement = document.getElementById('establishment-list');
    const filterInput = document.getElementById('filter-input');
    const cityAutocomplete = document.getElementById('city-autocomplete');
    const citiesList = document.getElementById('cities-list');
    const mapElement = document.getElementById('map');
    
    // Nuevos botones contextuales (reemplazan los anteriores)
    const viewControlBtn = document.getElementById('view-control-btn');
    const toggleViewBtn = document.getElementById('toggle-view-btn');
    
    // Secciones principales
    const listSection = document.getElementById('list-section');
    const mapSection = document.getElementById('map-section');
    
    // Otros elementos de la UI
    const clearSearchBtn = document.getElementById('clear-search');
    const clearCityBtn = document.getElementById('clear-city');
    
    // Iconos contextuales
    const viewControlIcon = document.getElementById('view-control-icon');
    const toggleViewIcon = document.getElementById('toggle-view-icon');
    
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

    // ------------------- NUEVAS FUNCIONES DE NAVEGACIÓN MÓVIL -------------------

    /**
     * Estados posibles de la UI:
     * 1. Vista combinada: Listado arriba, mapa abajo
     * 2. Listado completo: Solo se ve el listado
     * 3. Mapa completo: Solo se ve el mapa
     * 4. Listado oculto: El listado está oculto (después de seleccionar un ítem)
     */
    
    // Función para mostrar el mapa a pantalla completa
    function showFullscreenMap() {
        // Primero remover cualquier estado previo
        resetAllStates();
        
        // Aplicar nuevo estado
        mapSection.classList.add('fullscreen');
        listSection.classList.add('mobile-hidden');
        
        // Configurar estilos explícitamente
        mapSection.style.height = '100vh';
        mapSection.style.width = '100%';
        mapSection.style.position = 'fixed';
        mapSection.style.top = '0';
        mapSection.style.left = '0';
        mapSection.style.right = '0';
        mapSection.style.bottom = '0';
        mapSection.style.zIndex = '1000';
        mapSection.style.visibility = 'visible';
        mapSection.style.display = 'block';
        
        // Actualizar iconos contextuales para reflejar el estado
        updateContextualIcons('fullscreen-map');
        
        // Evitar scroll del body
        document.body.style.overflow = 'hidden';
        
        // Recalcular tamaño del mapa
        setTimeout(() => {
            map.invalidateSize();
        }, 300);
    }
    
    // Función para mostrar el listado a pantalla completa
    function showFullscreenList() {
        // Primero remover cualquier estado previo
        resetAllStates();
        
        // Aplicar nuevo estado
        listSection.classList.add('fullscreen-list');
        
        // Configurar estilos explícitamente
        listSection.style.height = '100vh';
        listSection.style.width = '100%';
        listSection.style.position = 'fixed';
        listSection.style.top = '0';
        listSection.style.left = '0';
        listSection.style.right = '0';
        listSection.style.bottom = '0';
        listSection.style.zIndex = '1000';
        listSection.style.visibility = 'visible';
        listSection.style.display = 'flex';
        
        // Actualizar iconos contextuales para reflejar el estado
        updateContextualIcons('fullscreen-list');
        
        // Ocultar mapa
        mapSection.style.height = '0';
        mapSection.style.visibility = 'hidden';
        mapSection.style.display = 'none';
        
        // Mostrar mensaje de confirmación
        showTemporaryMessage('Modo de listado completo');
    }
    
    // Función para mostrar la vista combinada (listado y mapa)
    function showCombinedView() {
        // Primero remover cualquier estado previo
        resetAllStates();
        
        // Ajustar tamaños según el dispositivo
        if (window.innerWidth <= 768) {
            listSection.style.height = '60vh';
            mapSection.style.height = '40vh';
        } else {
            // Para desktop, mantener el layout normal
            listSection.style.height = '';
            mapSection.style.height = '';
        }
        
        // En pantallas muy pequeñas
        if (window.innerWidth <= 480) {
            listSection.style.height = '70vh';
            mapSection.style.height = '30vh';
        }
        
        // Asegurar visibilidad de ambas secciones
        listSection.style.visibility = 'visible';
        listSection.style.display = 'flex';
        listSection.style.position = '';
        listSection.style.width = '';
        listSection.style.zIndex = '';
        
        mapSection.style.visibility = 'visible';
        mapSection.style.display = 'flex';
        mapSection.style.position = '';
        mapSection.style.width = '';
        mapSection.style.zIndex = '';
        
        // Actualizar iconos contextuales para reflejar el estado
        updateContextualIcons('combined');
        
        document.body.style.overflow = '';
        
        // Recalcular tamaño del mapa
        setTimeout(() => {
            map.invalidateSize();
        }, 300);
    }
    
    // Función para mostrar el mapa y ocultar el listado (después de seleccionar un ítem)
    function hideListShowMap() {
        // No resetear todos los estados, solo ajustar lo necesario
        listSection.classList.add('mobile-hidden');
        listSection.classList.remove('fullscreen-list');
        mapSection.classList.remove('fullscreen');
        
        // Configurar estilos
        mapSection.style.height = '100vh';
        mapSection.style.visibility = 'visible';
        mapSection.style.display = 'flex';
        
        // Actualizar iconos contextuales para reflejar el estado
        updateContextualIcons('list-hidden');
        
        // Recalcular tamaño del mapa
        setTimeout(() => {
            map.invalidateSize();
        }, 300);
    }
    
    // Función para resetear todos los estados
    function resetAllStates() {
        // Eliminar todas las clases de estado
        listSection.classList.remove('mobile-hidden', 'fullscreen-list');
        mapSection.classList.remove('fullscreen');
        
        // Restaurar overflow del body
        document.body.style.overflow = '';
    }
    
    // Función para actualizar los iconos contextuales según el estado
    function updateContextualIcons(state) {
        // Por defecto - vista combinada
        viewControlBtn.title = 'Mostrar listado completo';
        toggleViewBtn.title = 'Mostrar mapa completo';
        
        switch(state) {
            case 'fullscreen-map':
                // En mapa completo, el botón muestra listado
                viewControlBtn.title = 'Mostrar listado';
                break;
                
            case 'fullscreen-list':
                // En listado completo, el botón vuelve a vista combinada
                toggleViewBtn.title = 'Volver a vista combinada';
                break;
                
            case 'list-hidden':
                // Cuando el listado está oculto, el botón lo muestra
                viewControlBtn.title = 'Mostrar listado';
                break;
                
            case 'combined':
            default:
                // Vista combinada - comportamiento por defecto
                break;
        }
    }
    
    // Función para mostrar un mensaje temporal
    function showTemporaryMessage(text) {
        // Eliminar mensaje existente si hay
        const existingMessage = document.getElementById('temp-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Crear nuevo mensaje
        const message = document.createElement('div');
        message.id = 'temp-message';
        message.style.padding = '8px';
        message.style.margin = '10px';
        message.style.textAlign = 'center';
        message.style.background = '#e8f5e9';
        message.style.borderRadius = '4px';
        message.style.fontSize = '0.9em';
        message.style.color = '#2e7d32';
        message.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
        message.innerHTML = text;
        
        // Insertar mensaje
        const h2Element = listSection.querySelector('h2');
        if (h2Element && h2Element.nextSibling) {
            listSection.insertBefore(message, h2Element.nextSibling);
        }
        
        // Ocultar después de 3 segundos
        setTimeout(() => {
            message.style.opacity = '0';
            message.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                if (message.parentNode) {
                    message.parentNode.removeChild(message);
                }
            }, 500);
        }, 3000);
    }
    
    // ------------------- EVENT LISTENERS PARA BOTONES -------------------
    
    // Botón de control contextual en el mapa
    if (viewControlBtn) {
        viewControlBtn.addEventListener('click', () => {
            // Determinar acción basada en el estado actual
            if (listSection.classList.contains('mobile-hidden')) {
                // Si el listado está oculto, mostrar vista combinada
                showCombinedView();
            } 
            else if (mapSection.classList.contains('fullscreen')) {
                // Si el mapa está en pantalla completa, mostrar vista combinada
                showCombinedView();
            }
            else if (!listSection.classList.contains('fullscreen-list')) {
                // Si estamos en vista combinada, mostrar listado completo
                showFullscreenList();
            }
        });
    }
    
    // Botón de control contextual en el listado
    if (toggleViewBtn) {
        toggleViewBtn.addEventListener('click', () => {
            // Si estamos en modo listado completo, volver a vista combinada
            if (listSection.classList.contains('fullscreen-list')) {
                showCombinedView();
            }
            // En cualquier otro caso, mostrar mapa completo
            else {
                showFullscreenMap();
            }
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
                // Highlight the selected item first
                document.querySelectorAll('#establishment-list li').forEach(el => {
                    el.classList.remove('active');
                });
                li.classList.add('active');
                
                // Primero asegurar que el mapa esté visible
                // Si estamos en modo listado completo, cambiar a vista combinada primero
                if (listSection.classList.contains('fullscreen-list')) {
                    showCombinedView();
                    
                    // Dar tiempo para que el mapa se inicialice antes de navegar
                    setTimeout(() => {
                        navigateToMarkerAndHideList(li, item);
                    }, 500);
                } else {
                    // Si ya estamos en vista combinada, simplemente navegar
                    navigateToMarkerAndHideList(li, item);
                }
            });

            listElement.appendChild(li);
        });
    }
    
    // Función separada para navegar al marcador y ocultar listado en móvil
    function navigateToMarkerAndHideList(listItem, item) {
        // Asegurar que el mapa sea visible y con tamaño correcto
        mapSection.style.visibility = 'visible';
        mapSection.style.display = 'flex';
        map.invalidateSize();
        
        // Encontrar el marcador correspondiente
        const marker = markers[listItem.dataset.sigla];
        
        if (marker) {
            // Navegar al marcador
            map.flyTo(marker.getLatLng(), 15);
            marker.openPopup();
            
            // En móvil, ocultar el listado después de un breve retraso
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    hideListShowMap();
                }, 300);
            }
        } else if (item.latitud && item.longitud) {
            // Fallback si no se encuentra el marcador
            map.flyTo([item.latitud, item.longitud], 15);
            
            // En móvil, ocultar el listado después de un breve retraso
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    hideListShowMap();
                }, 300);
            }
        }
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
