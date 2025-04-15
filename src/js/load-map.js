import { establecimientos } from '../data.js';

export default function loadMap() {
	// Store all unique cities
	const allCities = [];

	// --- Map Initialization (Leaflet) ---
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
}
