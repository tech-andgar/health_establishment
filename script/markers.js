// Marker management functionality
export function initializeMarkers(map) {
    // Store markers to manage them
    const markers = {};
    
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
        
        return markers;
    }
    
    return {
        markers,
        addMarkers
    };
} 
