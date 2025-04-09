// List generation and filtering functionality
import { setInnerHTML, addEventListener, addClass, removeClass } from './utils/helpers.js';
import { getEstablecimientos } from './data.js';

export function initializeListFilter(listElement, filterInput, cityAutocomplete, citiesList, map, markers, typeFilter) {
  let establecimientos = [];
  try {
    establecimientos = getEstablecimientos();
  } catch (error) {
    console.error("Error al cargar los establecimientos:", error);
  }
  // Store all unique cities
  let allCities = [];

  // Extract establishment types from names
  function getEstablishmentTypes(items) {
    const types = new Set();
    const counts = {
      DISPENSARIO: 0,
      CONSULTORIO: 0,
      'CENTRO DE': 0,
      ESCUELA: 0,
      'ESTABLECIMIENTO DE SANIDAD': 0,
      'BATALLÓN DE INFANTERÍA': 0,
      'BATALLÓN DE ARTILLERÍA': 0,
      'BATALLÓN DE INGENIEROS': 0,
      'BATALLÓN DE A.S.P.C': 0,
      'BATALLÓN DE ALTA MONTAÑA': 0,
      'BATALLÓN DE SELVA': 0,
      'BATALLÓN DE TRANSPORTES': 0,
      'BATALLÓN DE INSTRUCCIÓN': 0,
      'GRUPO DE CABALLERÍA': 0,
      'PUESTO DE MANDO': 0
    };

    items.forEach(item => {
      const nombre = item.nombre;

      // Tipos principales
      if (nombre.startsWith('DISPENSARIO') || nombre.includes(' DISPENSARIO ')) {
        types.add('DISPENSARIO');
        counts.DISPENSARIO++;
      }
      if (nombre.startsWith('CONSULTORIO')) {
        types.add('CONSULTORIO');
        counts.CONSULTORIO++;
      }
      if (nombre.includes('CENTRO DE')) {
        types.add('CENTRO DE');
        counts['CENTRO DE']++;
      }
      if (nombre.includes('ESCUELA')) {
        types.add('ESCUELA');
        counts.ESCUELA++;
      }
      if (nombre.startsWith('ESTABLECIMIENTO DE SANIDAD MILITAR')) {
        types.add('ESTABLECIMIENTO DE SANIDAD');
        counts['ESTABLECIMIENTO DE SANIDAD']++;
      }
      if (nombre.includes('BATALLÓN DE INFANTERÍA')) {
        types.add('BATALLÓN DE INFANTERÍA');
        counts['BATALLÓN DE INFANTERÍA']++;
      }
      if (nombre.includes('BATALLÓN DE ARTILLERÍA')) {
        types.add('BATALLÓN DE ARTILLERÍA');
        counts['BATALLÓN DE ARTILLERÍA']++;
      }
      if (nombre.includes('BATALLÓN DE INGENIEROS')) {
        types.add('BATALLÓN DE INGENIEROS');
        counts['BATALLÓN DE INGENIEROS']++;
      }
      if (nombre.includes('BATALLÓN DE A.S.P.C')) {
        types.add('BATALLÓN DE A.S.P.C');
        counts['BATALLÓN DE A.S.P.C']++;
      }
      if (nombre.includes('BATALLÓN DE ALTA MONTAÑA')) {
        types.add('BATALLÓN DE ALTA MONTAÑA');
        counts['BATALLÓN DE ALTA MONTAÑA']++;
      }
      if (nombre.includes('BATALLÓN DE SELVA')) {
        types.add('BATALLÓN DE SELVA');
        counts['BATALLÓN DE SELVA']++;
      }
      if (nombre.includes('BATALLÓN DE TRANSPORTES')) {
        types.add('BATALLÓN DE TRANSPORTES');
        counts['BATALLÓN DE TRANSPORTES']++;
      }
      if (nombre.includes('BATALLÓN DE INSTRUCCIÓN')) {
        types.add('BATALLÓN DE INSTRUCCIÓN');
        counts['BATALLÓN DE INSTRUCCIÓN']++;
      }
      if (nombre.includes('GRUPO DE CABALLERÍA')) {
        types.add('GRUPO DE CABALLERÍA');
        counts['GRUPO DE CABALLERÍA']++;
      }
      if (nombre.includes('PUESTO MANDO')) {
        types.add('PUESTO DE MANDO');
        counts['PUESTO DE MANDO']++;
      }
    });

    return Array.from(types).sort();
  }

  // Populate type filter options
  function populateTypeOptions(items) {
    if (!typeFilter) return;

    // Get unique types
    const types = getEstablishmentTypes(items);

    // The options are now in the HTML datalist, no need to populate dynamically
    // Just ensure the typeFilter is properly initialized
    addEventListener(typeFilter, 'input', filterEstablecimientos);
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
    addEventListener(cityAutocomplete, 'input', filterEstablecimientos);

    // Populate type options
    populateTypeOptions(items);
  }

  // --- List Generation ---
  function displayList(items) {
    setInnerHTML(listElement, ''); // Clear previous list

    if (!items || items.length === 0) {
      setInnerHTML(listElement, '<li class="no-results">No se encontraron establecimientos.</li>');
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
      addEventListener(li, 'click', () => {
        // Highlight the selected item first
        document.querySelectorAll('#establishment-list li').forEach(el => {
          removeClass(el, 'active');
        });
        addClass(li, 'active');

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

  // --- Filtering Logic ---
  function filterEstablecimientos() {
    const searchTerm = filterInput.value.toLowerCase().trim();
    const selectedCity = cityAutocomplete.value;
    const selectedType = typeFilter ? typeFilter.value : '';

    const filteredItems = establecimientos.filter(item => {
      // First check city filter
      if (selectedCity && item.ciudad !== selectedCity) {
        return false;
      }

      // Check type filter
      if (selectedType && selectedType !== 'Todos los tipos' && selectedType !== '') {
        const nombre = item.nombre;

        switch (selectedType) {
          case 'Dispensario':
            return nombre.startsWith('DISPENSARIO') || nombre.includes(' DISPENSARIO ');
          case 'Consultorio':
            return nombre.startsWith('CONSULTORIO') || nombre.includes(' CONSULTORIO ');
          case 'Centro':
            return nombre.includes('CENTRO DE') || nombre.includes('CENTRO DE SALUD');
          case 'Escuela':
            return nombre.includes('ESCUELA');
          case 'Establecimiento de Sanidad':
            return nombre.startsWith('ESTABLECIMIENTO DE SANIDAD MILITAR');
          case 'Batallón de Infantería':
            return nombre.includes('BATALLÓN DE INFANTERÍA');
          case 'Batallón de Artillería':
            return nombre.includes('BATALLÓN DE ARTILLERÍA');
          case 'Batallón de Ingenieros':
            return nombre.includes('BATALLÓN DE INGENIEROS');
          case 'Batallón de A.S.P.C':
            return nombre.includes('BATALLÓN DE A.S.P.C');
          case 'Batallón de Alta Montaña':
            return nombre.includes('BATALLÓN DE ALTA MONTAÑA');
          case 'Batallón de Selva':
            return nombre.includes('BATALLÓN DE SELVA');
          case 'Batallón de Transportes':
            return nombre.includes('BATALLÓN DE TRANSPORTES');
          case 'Batallón de Instrucción':
            return nombre.includes('BATALLÓN DE INSTRUCCIÓN');
          case 'Grupo de Caballería':
            return nombre.includes('GRUPO DE CABALLERÍA');
          case 'Puesto de Mando':
            return nombre.includes('PUESTO MANDO');
          default:
            return true;
        }
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

      // If no text search, include all items that passed the filters
      return true;
    });

    displayList(filteredItems);
    return filteredItems;
  }

  // Add event listeners for filtering
  addEventListener(filterInput, 'input', filterEstablecimientos);
  if (typeFilter) {
    addEventListener(typeFilter, 'change', filterEstablecimientos);
  }

  // Clear filters button functionality
  const clearFilters = (filterType) => {
    switch (filterType) {
      case 'search':
        filterInput.value = '';
        break;
      case 'city':
        cityAutocomplete.value = '';
        break;
      case 'type':
        if (typeFilter) {
          typeFilter.value = '';
        }
        break;
      case '':
        filterInput.value = '';
        cityAutocomplete.value = '';
        if (typeFilter) {
          typeFilter.value = '';
        }
        map.setView([4.57, -74.29], 6); // Reset map view to Colombia only when clearing all
        break;
    }

    const filteredItems = filterEstablecimientos();
    return filteredItems;
  };

  // Add event listeners for clear buttons
  if (document.getElementById('clear-search')) {
    addEventListener(document.getElementById('clear-search'), 'click', () => clearFilters('search'));
  }
  if (document.getElementById('clear-city')) {
    addEventListener(document.getElementById('clear-city'), 'click', () => clearFilters('city'));
  }
  if (document.getElementById('clear-type')) {
    addEventListener(document.getElementById('clear-type'), 'click', () => clearFilters('type'));
  }

  // Return functions that need to be accessed from outside
  return {
    populateCityOptions,
    displayList,
    filterEstablecimientos,
    clearFilters
  };
} 
