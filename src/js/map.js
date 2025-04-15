// Map initialization and management
export function initializeMap(mapElement) {
	// Initial center on Colombia approx.
	const map = L.map(mapElement).setView([4.57, -74.29], 6);

	// Add Tile Layer (OpenStreetMap is free)
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(map);

	// Improve map resizing using ResizeObserver
	const resizeObserver = new ResizeObserver(() => {
		// Add a small delay to ensure layout calculation is complete
		setTimeout(() => map.invalidateSize(), 100);
	});
	if (mapElement) {
		resizeObserver.observe(mapElement);
	}

	return map;
}

// Function to invalidate map size (useful after view changes)
export function invalidateMapSize(map) {
	setTimeout(() => {
		map.invalidateSize();
	}, 150);
}
