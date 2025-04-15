// Split View Panel System - JavaScript for resizable panels
export function initializeSplitView() {
	// No necesitamos otro DOMContentLoaded aquí, ya que main.js ya lo tiene
	const container = document.querySelector('.container');
	const divider = document.querySelector('.divider');
	const leftPanel = document.querySelector('.left-panel');
	const rightPanel = document.querySelector('.right-panel');
	const dividerHandle = document.querySelector('.divider-handle');
	const map = document.getElementById('map'); // Reference to the Leaflet map

	// Verificar que todos los elementos necesarios existen
	if (!container || !divider || !leftPanel || !rightPanel || !dividerHandle) {
		console.error('Elementos necesarios para split-view no encontrados');
		return;
	}

	let isDragging = false;
	let initialPos = 0;
	let initialLeftSize = 0;
	let initialRightSize = 0;
	let containerSize = 0;
	let currentLayout = window.innerWidth <= 768 ? 'vertical' : 'horizontal';

	// Function to check if the layout should be vertical based on screen size
	function shouldBeVerticalLayout() {
		return window.innerWidth <= 768;
	}

	// Function to check if the layout is currently vertical
	function isVerticalLayout() {
		return container.classList.contains('vertical');
	}

	// Function to update layout classes
	function updateLayoutClasses(forceLayout = null) {
		// Determine if layout should change
		const shouldBeVertical =
			forceLayout !== null
				? forceLayout === 'vertical'
				: shouldBeVerticalLayout();

		// Only change if needed
		if (shouldBeVertical !== isVerticalLayout()) {
			if (shouldBeVertical) {
				// Switch to vertical layout
				container.classList.add('vertical');
				leftPanel.classList.add('vertical');
				rightPanel.classList.add('vertical');
				divider.classList.add('vertical');
				dividerHandle.classList.add('vertical');

				// Reset panel sizes for vertical layout
				leftPanel.style.width = '100%';
				leftPanel.style.height = '60vh';
				rightPanel.style.width = '100%';
				rightPanel.style.height = '40vh';

				currentLayout = 'vertical';
			} else {
				// Switch to horizontal layout
				container.classList.remove('vertical');
				leftPanel.classList.remove('vertical');
				rightPanel.classList.remove('vertical');
				divider.classList.remove('vertical');
				dividerHandle.classList.remove('vertical');

				// Reset panel sizes for horizontal layout
				leftPanel.style.height = '100%';
				leftPanel.style.width = '40%';
				rightPanel.style.height = '100%';
				rightPanel.style.width = '60%';

				currentLayout = 'horizontal';
			}
		}

		// Update map size after layout change (important for Leaflet)
		if (map && typeof map.invalidateSize === 'function') {
			setTimeout(() => {
				map.invalidateSize();
			}, 100);
		}
	}

	// Initialize layout on load
	updateLayoutClasses();

	// Set initial container size
	function updateContainerSize() {
		if (isVerticalLayout()) {
			containerSize = container.offsetHeight;
		} else {
			containerSize = container.offsetWidth;
		}
	}

	updateContainerSize();

	// Add event listeners for mouse and touch events
	divider.addEventListener('mousedown', initDrag);
	divider.addEventListener('touchstart', initDrag, { passive: false });

	function initDrag(e) {
		isDragging = true;
		divider.classList.add('active');

		updateContainerSize();
		const vertical = isVerticalLayout();

		if (vertical) {
			// For vertical layout
			initialLeftSize = leftPanel.offsetHeight;
			initialRightSize = rightPanel.offsetHeight;

			if (e.type === 'mousedown') {
				initialPos = e.clientY;
			} else if (e.type === 'touchstart') {
				initialPos = e.touches[0].clientY;
			}
		} else {
			// For horizontal layout
			initialLeftSize = leftPanel.offsetWidth;
			initialRightSize = rightPanel.offsetWidth;

			if (e.type === 'mousedown') {
				initialPos = e.clientX;
			} else if (e.type === 'touchstart') {
				initialPos = e.touches[0].clientX;
			}
		}

		// Add event listeners for dragging
		document.addEventListener('mousemove', doDrag);
		document.addEventListener('touchmove', doDrag, { passive: false });
		document.addEventListener('mouseup', stopDrag);
		document.addEventListener('touchend', stopDrag);
		document.addEventListener('touchcancel', stopDrag);

		// Prevent text selection during drag
		e.preventDefault();
	}

	function doDrag(e) {
		if (!isDragging) return;

		let currentPos = 0;
		const vertical = isVerticalLayout();
		const minSize = 100; // Minimum panel size
		const dividerSize = vertical ? divider.offsetHeight : divider.offsetWidth;

		if (vertical) {
			// For vertical layout
			if (e.type === 'mousemove') {
				currentPos = e.clientY;
			} else if (e.type === 'touchmove') {
				currentPos = e.touches[0].clientY;
			}

			const offset = currentPos - initialPos;

			// Calculate new heights
			let newTopHeight = initialLeftSize + offset;
			let newBottomHeight = initialRightSize - offset;

			// Apply constraints
			if (newTopHeight < minSize) {
				newTopHeight = minSize;
				newBottomHeight = containerSize - minSize - dividerSize;
			} else if (newBottomHeight < minSize) {
				newBottomHeight = minSize;
				newTopHeight = containerSize - minSize - dividerSize;
			}

			// Update panel heights
			const topHeightPercent = (newTopHeight / containerSize) * 100;
			const bottomHeightPercent = (newBottomHeight / containerSize) * 100;

			leftPanel.style.height = `${topHeightPercent}%`;
			rightPanel.style.height = `${bottomHeightPercent}%`;
		} else {
			// For horizontal layout
			if (e.type === 'mousemove') {
				currentPos = e.clientX;
			} else if (e.type === 'touchmove') {
				currentPos = e.touches[0].clientX;
			}

			const offset = currentPos - initialPos;

			// Calculate new widths
			let newLeftWidth = initialLeftSize + offset;
			let newRightWidth = initialRightSize - offset;

			// Apply constraints
			if (newLeftWidth < minSize) {
				newLeftWidth = minSize;
				newRightWidth = containerSize - minSize - dividerSize;
			} else if (newRightWidth < minSize) {
				newRightWidth = minSize;
				newLeftWidth = containerSize - minSize - dividerSize;
			}

			// Update panel widths
			const leftWidthPercent = (newLeftWidth / containerSize) * 100;
			const rightWidthPercent = (newRightWidth / containerSize) * 100;

			leftPanel.style.width = `${leftWidthPercent}%`;
			rightPanel.style.width = `${rightWidthPercent}%`;
		}

		e.preventDefault();
	}

	function stopDrag() {
		isDragging = false;
		divider.classList.remove('active');

		// Remove event listeners
		document.removeEventListener('mousemove', doDrag);
		document.removeEventListener('touchmove', doDrag);
		document.removeEventListener('mouseup', stopDrag);
		document.removeEventListener('touchend', stopDrag);
		document.removeEventListener('touchcancel', stopDrag);

		// Update map size after resize (important for Leaflet)
		if (map && typeof map.invalidateSize === 'function') {
			setTimeout(() => {
				map.invalidateSize();
			}, 100);
		}
	}

	// Prevent default drag behavior
	divider.addEventListener('dragstart', (e) => {
		e.preventDefault();
	});

	// Handle window resize - improved to actually change layout
	let resizeTimeout;
	window.addEventListener('resize', () => {
		// Debounce resize event
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(() => {
			const shouldBeVertical = shouldBeVerticalLayout();
			const isCurrentlyVertical = isVerticalLayout();

			// Only update if layout should change
			if (shouldBeVertical !== isCurrentlyVertical) {
				// Force layout update
				updateLayoutClasses();
			}

			// Always update container size
			updateContainerSize();

			// Update map size after resize (important for Leaflet)
			if (map && typeof map.invalidateSize === 'function') {
				map.invalidateSize();
			}
		}, 250);
	});

	// Global function to toggle layout manually
	window.toggleLayout = () => {
		const currentVertical = isVerticalLayout();
		updateLayoutClasses(currentVertical ? 'horizontal' : 'vertical');
		updateContainerSize();
	};
}
