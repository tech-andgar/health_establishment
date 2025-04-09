// Main application file
import { initializeModal } from './modal.js';
import { initializeMap, invalidateMapSize } from './map.js';
import { initializeViewControl } from './view-control.js';
import { initializeListFilter } from './list-filter.js';
import { initializeMarkers } from './markers.js';
import { getElement, addEventListener } from './utils/helpers.js';
import { establecimientos } from '../data.js';
import { toggleFilters } from './filter-toggle.js';
import { initializeSplitView } from './split-view.js';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get DOM elements
  const listElement = getElement('establishment-list');
  const filterInput = getElement('filter-input');
  const cityAutocomplete = getElement('city-autocomplete');
  const citiesList = getElement('cities-list');
  const mapElement = getElement('map');
  const typeFilter = getElement('establishment-type');

  // Get references to view control buttons
  const viewListBtn = getElement('view-list-btn');
  const viewBothBtn = getElement('view-both-btn');
  const viewMapBtn = getElement('view-map-btn');

  // Secciones principales
  const listSection = getElement('list-section');
  const mapSection = getElement('map-section');

  // Otros elementos de la UI
  const clearSearchBtn = getElement('clear-search');
  const clearCityBtn = getElement('clear-city');
  const clearTypeBtn = getElement('clear-type');

  // Initialize modal
  initializeModal();

  // Initialize filter toggle
  toggleFilters();

  // Initialize split view
  initializeSplitView();

  // Initialize map
  const map = initializeMap(mapElement);

  // Initialize markers
  const { markers, addMarkers } = initializeMarkers(map);

  // Initialize view control
  const setViewMode = initializeViewControl(viewListBtn, viewBothBtn, viewMapBtn, map);

  // Initialize list and filtering
  const { populateCityOptions, displayList, filterEstablecimientos, clearFilters } =
    initializeListFilter(listElement, filterInput, cityAutocomplete, citiesList, map, markers, typeFilter);

  // Clear filters button functionality
  if (clearSearchBtn) {
    addEventListener(clearSearchBtn, 'click', () => {
      filterInput.value = '';
      const filteredItems = filterEstablecimientos();
      addMarkers(filteredItems);
    });
  }

  if (clearCityBtn) {
    addEventListener(clearCityBtn, 'click', () => {
      cityAutocomplete.value = '';
      const filteredItems = filterEstablecimientos();
      addMarkers(filteredItems);
    });
  }

  if (clearTypeBtn && typeFilter) {
    addEventListener(clearTypeBtn, 'click', () => {
      typeFilter.value = '';
      const filteredItems = filterEstablecimientos();
      addMarkers(filteredItems);
    });
  }

  // --- Initial Load ---
  if (establecimientos && establecimientos.length > 0) {
    populateCityOptions(establecimientos); // Populate city options
    displayList(establecimientos); // Display the full list initially
    addMarkers(establecimientos); // Add all markers to the map
    // Set the initial view mode explicitly after data is loaded
    setViewMode('both');
  } else {
    console.error("Data 'establecimientos' not found or empty. Check data.js");
    listElement.innerHTML = '<li class="no-results">Error al cargar los datos.</li>';
  }
});
